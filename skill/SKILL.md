---
name: nixel
description: Build dynamic vector-pixel workspaces for any business.
version: 1.1.0
author: Hanief F.B.A (@teranixbq)
license: MIT
platforms: [linux, macos, windows]
metadata:
  hermes:
    tags: [nixel, vector-pixel, workspace, dynamic-roles, pixel-art, dashboard]
---

# Nixel: Living Vector-Pixel Workspaces

Nixel mixes crisp web UI (modern SaaS typography, card borders, responsive grids) with lightweight 2D pixel art. Most agent dashboards either look like sterile spreadsheet tables or clunky 8-bit games from 1995. Nixel aims for the middle: clean Scandinavian layouts that run at 60 FPS in a single canvas, showing real work happening in real time.

## When to use

Use this skill when you need:
- An interactive office or studio floorplan for an AI team or automated pipeline.
- A visual workflow where workers move between desks and break areas based on live status.
- A dashboard that maps to a specific business domain (e-commerce, SaaS, agency, editorial) without hardcoding roles.

Do not use this for:
- Static documentation pages with no live state.
- Classic pixel platformer games.

## Core rules

1. Data drives the floorplan. Never hardcode 4 static rooms. Accept an array of roles and calculate coordinates, room titles, and desk positions dynamically.
2. Separate work from breaks. Workers sit at desks while running tasks. When idle, they stand up, walk across the floor, and use communal spots (water cooler, sofa, espresso bar, whiteboard).
3. Precision vector UI around the canvas. Use clean CSS variables, subtle borders, and readable sans-serif fonts (Plus Jakarta Sans, Inter) for text. Keep the pixel grid inside the `<canvas>`.
4. Hit test sprites, not whole rooms. Hover inspection cards must attach to the worker sprite coordinates (`24px x 32px`), not the entire room box.
5. Keep scripts modular and under 500 lines per file. Split canvas engines, fixture assets, and app controllers into separate modules.

## Data schema

Every Nixel workspace consumes a JSON list of roles:

```json
[
  {
    "id": 1,
    "suite": "SUITE 01",
    "title": "Keyword Analysis",
    "role": "Keyword Analyst",
    "emp": "Specialist 01",
    "accent": "#445963",
    "desk": { "x": 140, "y": 110 },
    "idle": {
      "x": 335,
      "y": 340,
      "name": "Water Dispenser",
      "act": "Refilling water bottle"
    },
    "logs": [
      { "time": "09:15 AM", "task": "Parsed search volume clusters.", "status": "COMPLETED" }
    ],
    "todos": [
      { "text": "Map intent categories", "done": true, "tag": "ANALYSIS" }
    ]
  }
]
```

## How to build a new workspace

1. Read the user's business description. Pick 3 to 6 logical departments.
2. Generate role titles, current tasks, and telemetry metrics that match their domain.
3. Assign palette accents: Terracotta (`#944530`), Sage (`#3C5C48`), Ochre (`#8C581E`), and Slate (`#445963`).
4. Set up the canvas loop with `requestAnimationFrame`. Draw parquet floor lines, partition walls, desks, chairs, and communal fixtures.
5. Bind mouse clicks on desks to open the Workstation OS screen popup with logs, checklist items, and upcoming schedule.
