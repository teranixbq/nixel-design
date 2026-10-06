---
version: alpha
name: Nixel
description: Modern vector-pixel design system for living autonomous digital workspaces, combining precision vector interfaces, dynamic 2D pixel actor walk cycles, and configurable role architectures.
colors:
  primary: "#232526"
  primary-hover: "#383A3C"
  primary-soft: "#F5F2EB"
  neutral-bg: "#FBF9F5"
  neutral-surface: "#FFFFFF"
  neutral-subtle: "#F5F2EB"
  neutral-border: "#E8E3D8"
  neutral-border-focus: "#D8D0C2"
  text-main: "#232526"
  text-muted: "#585B5D"
  text-subtle: "#878A8D"
  accent-terracotta: "#944530"
  accent-terracotta-soft: "#F8EBE7"
  accent-sage: "#3C5C48"
  accent-sage-soft: "#EAF1ED"
  accent-ochre: "#8C581E"
  accent-ochre-soft: "#F9F2E7"
  accent-slate: "#445963"
  accent-slate-soft: "#E9EFF2"
  dark-bg: "#18191A"
  dark-surface: "#212325"
  dark-surface-subtle: "#2A2C2F"
  dark-border: "#34373B"
  dark-border-focus: "#464A4F"
  dark-text-main: "#F5F2EB"
  dark-text-muted: "#A2A6AA"
  dark-text-subtle: "#75797E"
  dark-accent-terracotta: "#E07A5F"
  dark-accent-sage: "#6DA481"
  dark-accent-ochre: "#D4A359"
  dark-accent-slate: "#7AA1B3"
typography:
  h1:
    fontFamily: Plus Jakarta Sans
    fontSize: 1.75rem
    fontWeight: 800
    lineHeight: 1.25
    letterSpacing: "-0.03em"
  h2:
    fontFamily: Plus Jakarta Sans
    fontSize: 1.25rem
    fontWeight: 700
    lineHeight: 1.3
    letterSpacing: "-0.02em"
  body-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 0.9375rem
    fontWeight: 400
    lineHeight: 1.6
  body-sm:
    fontFamily: Plus Jakarta Sans
    fontSize: 0.8125rem
    fontWeight: 500
    lineHeight: 1.5
  code-mono:
    fontFamily: JetBrains Mono
    fontSize: 0.75rem
    fontWeight: 600
    lineHeight: 1.4
rounded:
  sm: 6px
  md: 10px
  lg: 16px
  pill: 9999px
spacing:
  xs: 4px
  sm: 8px
  md: 16px
  lg: 24px
  xl: 32px
components:
  card-desk:
    backgroundColor: "{colors.neutral-surface}"
    textColor: "{colors.text-main}"
    rounded: "{rounded.md}"
    padding: "{spacing.md}"
  card-desk-active:
    backgroundColor: "{colors.primary-soft}"
    textColor: "{colors.primary}"
    rounded: "{rounded.md}"
    padding: "{spacing.md}"
  card-desk-idle:
    backgroundColor: "{colors.neutral-subtle}"
    textColor: "{colors.text-muted}"
    rounded: "{rounded.md}"
    padding: "{spacing.md}"
  tooltip-inspect:
    backgroundColor: "{colors.neutral-surface}"
    textColor: "{colors.text-main}"
    rounded: "{rounded.sm}"
    padding: "{spacing.sm}"
  badge-keyword:
    backgroundColor: "{colors.accent-slate-soft}"
    textColor: "{colors.accent-slate}"
    rounded: "{rounded.pill}"
    padding: "{spacing.xs}"
  badge-domain:
    backgroundColor: "{colors.accent-ochre-soft}"
    textColor: "{colors.accent-ochre}"
    rounded: "{rounded.pill}"
    padding: "{spacing.xs}"
  badge-content:
    backgroundColor: "{colors.accent-terracotta-soft}"
    textColor: "{colors.accent-terracotta}"
    rounded: "{rounded.pill}"
    padding: "{spacing.xs}"
  badge-publish:
    backgroundColor: "{colors.accent-sage-soft}"
    textColor: "{colors.accent-sage}"
    rounded: "{rounded.pill}"
    padding: "{spacing.xs}"
  btn-primary:
    backgroundColor: "{colors.primary}"
    textColor: "#FFFFFF"
    rounded: "{rounded.sm}"
    padding: 10px
  btn-primary-hover:
    backgroundColor: "{colors.primary-hover}"
    textColor: "#FFFFFF"
    rounded: "{rounded.sm}"
    padding: 10px
---

## Overview

**NIXEL** (*Vector + Pixel + Web Design*) is an open, modular design system created for interactive web applications and autonomous AI workspace studios. It balances three design foundations:
1. **Vector Geometry:** Clean interface layouts, high-resolution typographic precision (*Plus Jakarta Sans*), subtle elevation shadows, and modern glass dividers.
2. **Pixel Dynamics:** 2D pixel-art worker sprites with realistic walking cycles and organic idle activities (brewing coffee, watching screens on lounge sofas, refilling water coolers, whiteboard ideation).
3. **Web Design Ergonomics:** Contemporary Scandinavian/Japandi SaaS light mode paired with a warm Obsidian studio dark mode, responsive card grids, and strict WCAG accessibility compliance.

All workforce parameters—including employee display names, roles, room counts, and idle destinations—are **100% user-configurable via standard data schemas**.

---

## Colors

Nixel utilizes a dual-theme color architecture engineered for long-session comfort and high contrast:

### 1. Minimalist Warm Cream (Default Light Theme)
- **Canvas Base (`#FBF9F5`):** Warm oat-milk cream canvas layered with subtle geometric dot grid (`#DFDAD0`).
- **Surface Cards (`#FFFFFF`):** Pure white container surfaces with 1px border.
- **Surface Subtle (`#F5F2EB`):** Secondary neutral surface for studio parquet, status chips, and corridors.
- **Borders (`#E8E3D8` / Focus: `#D8D0C2`):** Natural sand borders without harsh black outlines.
- **Primary Text (`#232526`):** Deep warm charcoal offering maximum legibility.
- **Accents:**
  - Terracotta (`#944530` / Soft: `#F8EBE7`): Warm editorial and craft focus.
  - Sage Green (`#3C5C48` / Soft: `#EAF1ED`): Production release and live indicators.
  - Warm Ochre (`#8C581E` / Soft: `#F9F2E7`): Systems topology and metrics.
  - Muted Slate (`#445963` / Soft: `#E9EFF2`): Data analysis and search intents.

### 2. Obsidian Studio (Dark Theme)
- **Canvas Base (`#18191A`):** Deep warm obsidian charcoal with muted dot matrix (`#2E3135`).
- **Surface Cards (`#212325`):** Elevated dark panel surfaces with subtle border (`#34373B`).
- **Surface Subtle (`#2A2C2F`):** Deep slate for terminal feeds and night floors.
- **Primary Text (`#F5F2EB`):** Warm ivory text optimized for low-glare reading.
- **Glowing Accents:** Terracotta (`#E07A5F`), Sage (`#6DA481`), Ochre (`#D4A359`), Slate (`#7AA1B3`).

---

## Typography

- **Primary Sans (`Plus Jakarta Sans`):** Standard for 90% of UI elements (Display H1 28px/1.25, Section H2 20px/1.3, Body Regular 15px/1.6).
- **Monospace (`JetBrains Mono`):** Dedicated to technical data, live logs, room tags, and operational telemetry (Code 12px/1.4).

---

## Layout

### 1. Dynamic Workforce Architecture (N-Position Scalability)
Workplace layouts adapt dynamically to any business schema:
- **Flexible JSON Data Schema:** Position counts, room names, and employee identities are injected as data props rather than hardcoded layouts.
- **Auto-Arranging Floorplans:**
  - Single-wing floorplan for 1–4 roles with central service hallway.
  - Dual-wing pod cluster for 5–8 roles encircling an expanded break lounge.
- **Responsive Card Flow:** CSS grid container using `repeat(auto-fit, minmax(240px, 1fr))`.

### 2. Canvas Ratios & Partitions
- **Canvas Height:** Standard 480px responsive viewport with 60 FPS requestAnimationFrame loop.
- **Room Partitions:** Realistic acoustic timber and glass partition panels with clear doorways into communal corridors.

---

## Elevation & Depth

- **Resting Surface:** `0 1px 3px rgba(35, 37, 38, 0.04)`.
- **Card Hover Elevation:** `-2px` translation with `0 4px 8px -1px rgba(35, 37, 38, 0.06)`.
- **Actor Tooltip Popover:** `0 16px 32px -4px rgba(35, 37, 38, 0.12)` (Light) / `0 16px 32px -4px rgba(0, 0, 0, 0.60)` (Dark).

---

## Shapes

- **Containers & Studio Frames:** `border-radius: 12px` to `16px`.
- **Interactive Controls:** `border-radius: 8px`.
- **Status Pills:** `border-radius: 9999px` (Pill format).
- **Pixel Sprites:** Crisp un-aliased pixel grids rendered with `image-rendering: pixelated;`.

---

## Components

### 1. Configurable Workforce Data Schema
```json
{
  "id": "role_01",
  "roomTitle": "SEO & DATA LAB",
  "employeeName": "Specialist 01",
  "roleTitle": "Data Analyst",
  "currentTask": "Clustering organic queries and volume mining",
  "liveMetric": "Vol: 142k | Low KD",
  "accentColor": "#445963",
  "deskCoord": { "x": 140, "y": 120 },
  "idleActivity": {
    "type": "water_cooler",
    "locationName": "Water Dispenser",
    "statusLabel": "Refilling Water Bottle"
  }
}
```

### 2. Ergonomic Desks & Slim Laptops
- **Desks:** Proportional natural oak desks (50px wide x 16px deep) with slender legs.
- **Laptops:** Scaled slim open laptops (13px wide x 9px high) with glowing monitor displays showing active code or charts.

### 3. Realistic Office Fixtures
- **Water Dispenser:** Standard office water cooler with inverted blue water gallon.
- **Multi-Function Copier:** Heavy-duty office printer with paper feeder, touch console, and output paper tray.
- **Reference Library & Corkboard:** Bookshelves with binders and cork pinboard with colorful sticky notes.
- **Breakout Lounge & Espresso Bar:** 3-seater sofa with area rug, coffee table, and pantry espresso counter.

### 4. Dynamic Walking & Activity State Machine
Workers transition through continuous behavioral states:
```text
[WORKING AT DESK]
       │
       ▼ (Idle event triggered)
[STAND UP]
       │
       ▼
[WALKING CYCLE] (Alternating leg strides, arm swings, 1-2px body bobbing)
       │
       ▼ (Reaches assigned break amenity)
[IDLE ACTIVITY] (Brewing espresso / relaxing on sofa / drinking water / whiteboard review)
       │
       ▼ (Active job event / character hover)
[RETURN WALK] (Turns around, walks back through doorway to private office)
       │
       ▼
[WORKING AT DESK]
```

### 5. Character-Specific Hover Inspection
Hover hit-testing is bound **strictly to the character sprite bounding box** (`24px x 32px`), not the room boundaries:
- Cursor shifts to `pointer` when hovering directly over a worker sprite.
- Floating popover card anchors dynamically above the worker's head displaying employee title, location, current task, and live operational metrics.

---

## Do's and Don'ts

### Do's
- **Keep employee names configurable:** Allow end-users and developers to supply custom team names, role titles, and avatar styles.
- **Target hover interactions to character sprites:** Only trigger inspection popovers when the mouse directly touches a worker sprite.
- **Animate genuine idle behavior:** Depict workers performing authentic office breaks (making coffee, drinking water, sitting on sofas) rather than freezing in place.
- **Maintain proportional scale:** Keep desks, laptops, and room furniture scaled naturally to character heights.

### Don'ts
- **Don't hardcode fixed workforce structures:** The engine must support scalable team sizes ($N$ roles).
- **Don't trigger inspection tooltips on empty floor space:** Tooltips belong to active team members, not floor tiles.
- **Don't use oversized computer monitors:** Keep laptop and monitor footprints proportional to characters.
- **Don't use pure black (`#000000`) for dark mode:** Always use warm slate/obsidian (`#18191A`).
