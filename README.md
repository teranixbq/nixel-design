# NIXEL: Dynamic Vector-Pixel Workspace Design System

> A modern, modular design system combining precision vector geometry, high-charm 2D pixel actor walk cycles, and configurable role architectures for living autonomous AI workspace studios.

[![Design System Specification](https://img.shields.io/badge/Spec-DESIGN.md-4F46E5.svg)](./DESIGN.md)
[![Accessibility](https://img.shields.io/badge/WCAG-AA%20Compliant-10B981.svg)](#accessibility)
[![Theme](https://img.shields.io/badge/Theme-Dual%20Mode%20(Cream%20%7C%20Obsidian)-D97706.svg)](#dual-mode-color-system)

---

## 🌟 Overview & Concept

**NIXEL** (*Vector + Pixel + Web Design*) bridges contemporary SaaS web design and dynamic nostalgic pixel art:
1. **Vector Precision:** Clean interface cards, refined typography (*Plus Jakarta Sans*), subtle elevation depth, and acoustic glass partition walls.
2. **Dynamic Pixel Actors:** Living employee sprites featuring realistic 4-frame walking cycles, body bobbing, and organic idle behaviors (brewing espresso, relaxing on lounge sofas, refilling water coolers, and reviewing whiteboard diagrams).
3. **Ergonomic Dual-Theme:** A default **Minimalist Warm Cream** (Japandi / Kinfolk aesthetic) paired with a high-contrast **Obsidian Studio Dark Mode** for low-light environments.
4. **Configurable Team Schema:** Employee names, job roles, room themes, and operational metrics are completely decoupled and user-configurable via standard JSON configurations.

---

## 🏢 Architectural Office Layout

The virtual office simulates an authentic workplace rather than sterile, identical cubicles:
- **SEO & Data Lab:** Analytics reporting board, long-tail data clustering, and natural oak desk with a slim open laptop.
- **Editorial Creative Suite:** Warm timber acoustic partition, reference library bookshelf with binders, and cork pinboard pinned with sticky notes.
- **DevOps & Server Hub:** Acoustic glass enclosure, server rack unit with active blinking LED telemetry, and modern task lighting.
- **Domain Architecture Pod:** Open-plan collaborative desk with low acoustic felt divider screens and topology diagrams.
- **Communal Hallway & Break Lounge:**
  - Water dispenser with upside-down blue water gallon.
  - Multi-function floor-standing office printer/copier with paper trays and printed sheets.
  - Breakout lounge featuring a comfortable 3-seater sofa, coffee table, and area rug.
  - Pantry espresso bar with stainless steel coffee machine and steaming mugs.
  - Classic round analog wall clock and coat rack stand with hanging jackets.

---

## 🎭 Dynamic Character States & Idle Activities

Workers operate through a continuous Finite State Machine (FSM):

```
[WORKING AT DESK]
       │
       ▼ (Idle state triggered)
[STAND UP] (300ms transition)
       │
       ▼
[WALKING CYCLE] (Alternating legs, arm swings, 1-2px vertical body bob)
       │
       ▼ (Reaches assigned break amenity)
[IDLE ACTIVITY]
   ├─ Coffee Bar: Brewing hot espresso with steam puff animation
   ├─ Breakout Lounge: Relaxing on sofa with media screen & snacks
   ├─ Water Cooler: Dispensing cold water with air bubbles into cup
   └─ Whiteboard: Reviewing diagrams and taking notes
       │
       ▼ (Task assigned / Character hovered)
[RETURN WALK] (Navigates back through doorway to private office)
       │
       ▼
[WORKING AT DESK] (Types on slim laptop, active data monitors)
```

---

## 🔍 Character-Specific Hover Inspection

Inspection popovers are attached **strictly to character sprites**, not to empty floor tiles or rooms:
* **Hitbox:** Mouse hit-testing checks the active worker sprite bounding box (`24px x 32px`).
* **Visual Feedback:** Canvas cursor switches to `pointer` when hovering over a worker.
* **Popover Card:** Floating card appears dynamically above the worker's head displaying:
  * Employee name & current location (e.g., *Specialist 01 · Brewing Coffee at Pantry*).
  * Current task description and live metric.

---

## 🎨 Dual-Mode Color System

### 1. Minimalist Warm Cream (Default Light Theme)
* **Canvas Base:** `#FBF9F5` (Oat-milk warm cream with subtle `#DFDAD0` dot grid)
* **Card Surface:** `#FFFFFF`
* **Subtle Neutral:** `#F5F2EB`
* **Borders:** `#E8E3D8` (Focus: `#D8D0C2`)
* **Primary Text:** `#232526` (Warm charcoal, high contrast)
* **Functional Accents:**
  * Terracotta: `#944530` / Soft: `#F8EBE7`
  * Sage Green: `#3C5C48` / Soft: `#EAF1ED`
  * Warm Ochre: `#8C581E` / Soft: `#F9F2E7`
  * Muted Slate: `#445963` / Soft: `#E9EFF2`

### 2. Obsidian Studio (Dark Theme)
* **Canvas Base:** `#18191A` (Deep warm obsidian with `#2E3135` grid)
* **Card Surface:** `#212325`
* **Subtle Neutral:** `#2A2C2F`
* **Borders:** `#34373B` (Focus: `#464A4F`)
* **Primary Text:** `#F5F2EB` (Warm ivory)
* **Glowing Accents:** Terracotta (`#E07A5F`), Sage (`#6DA481`), Ochre (`#D4A359`), Slate (`#7AA1B3`)

---

## 📦 Data Schema Example

To customize the workforce for any business type (e-commerce, customer support, agency, software development):

```json
[
  {
    "id": 1,
    "roomTitle": "SEO & DATA LAB",
    "employeeName": "Specialist 01",
    "roleTitle": "Data Analyst",
    "currentTask": "Clustering search queries and keyword volume analysis",
    "liveMetric": "Vol: 142k | Low KD",
    "accentColor": "#445963",
    "deskCoord": { "x": 140, "y": 120 },
    "idleActivity": {
      "targetX": 335,
      "targetY": 340,
      "name": "Water Dispenser",
      "action": "Refilling water bottle"
    }
  },
  {
    "id": 2,
    "roomTitle": "CREATIVE EDITORIAL SUITE",
    "employeeName": "Specialist 02",
    "roleTitle": "Lead Copywriter",
    "currentTask": "Drafting 2,800-word comprehensive semantic guide",
    "liveMetric": "Readability: 74.2",
    "accentColor": "#8C581E",
    "deskCoord": { "x": 520, "y": 120 },
    "idleActivity": {
      "targetX": 640,
      "targetY": 380,
      "name": "Breakout Sofa",
      "action": "Relaxing on sofa"
    }
  }
]
```

---

## 📁 Repository Structure

```
├── DESIGN.md                  # Google standard token & identity design specification
├── README.md                  # Comprehensive English project documentation
├── public/
│   ├── nixel-office.html      # Main interactive architectural office application
│   ├── css/
│   │   └── nixel-office.css   # Dual-mode responsive stylesheet (< 500 lines)
│   ├── js/
│   │   ├── nixel-office-canvas.js # Modular pixel-vector office canvas (< 500 lines)
│   │   └── nixel-office-app.js    # Interactive controller & simulation (< 500 lines)
│   ├── nixel-logo.svg         # Official Nixel vector identity logo
│   └── tokens.json            # Exported W3C DTCG standard design tokens
```

---

## 📄 License

Open-source and available under the [MIT License](LICENSE).
