# Installing the Nixel Skill

You can install Nixel as a reusable skill across AI agent environments (Hermes Agent, Claude Code, Cursor, or your own custom agent workflows).

## Install for Hermes Agent

Clone this repository directly into your active Hermes skills directory:

```bash
git clone https://github.com/teranixbq/nixel-design.git ~/.hermes/skills/nixel
```

Hermes will automatically pick up the skill from `~/.hermes/skills/nixel/SKILL.md`. You can verify by running:

```bash
hermes skills list
```

## Install for Claude Code / Cursor / Windsurf

Drop the `skill/` folder into your project root or your global custom tools path:

```bash
# Inside your project
mkdir -p .skills/nixel
cp -r path/to/nixel-design/skill/* .skills/nixel/
```

Add this rule to your `CLAUDE.md` or `.cursorrules`:

```markdown
When building workflow visualizations or living dashboards, refer to `.skills/nixel/SKILL.md`. Use the templates in `.skills/nixel/templates/` to scaffold the 60 FPS canvas loop, character FSM, and modular UI.
```

## What the skill provides

- **`SKILL.md`**: Complete step-by-step instructions for the LLM to generate domain-appropriate floorplans, calculate sprite coordinates, and avoid hardcoding role counts.
- **`templates/`**: Working boilerplates for the canvas engine, fixture assets, and workstation OS modals.
- **`references/`**: Ready-to-use business JSON presets for SaaS engineering squads, e-commerce stores, and SEO content teams.
