# Eligoo — AI Employees. Work From Cloud.

Marketing site for Eligoo: hire AI employees that work from the cloud.

## Stack

- **Vite + React + TypeScript**
- **Tailwind CSS v4** (`@tailwindcss/vite`)
- **Framer Motion** — scroll reveals, layout and micro-interactions
- **GSAP ScrollTrigger** — scroll-scrubbed hero cinematic
- **three.js / react-three-fiber / drei** — interactive 3D in employee profiles

## Getting started

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # production build to dist/
npm run preview  # preview the production build
```

## Structure

```
src/
  components/        page sections (Hero, Department, AtlasFlow, …)
    three/           shared 3D helpers
  data/employees.ts  the 7 AI employees — roles, decisions, KPIs, boundaries
  render/team.ts     dev-only offline renderer for the hero film
public/
  brand/             logo + mark (source artwork, do not redraw)
  models/            Draco-compressed employee .glb models
  employees/         rendered character portraits (WebP)
  frames/            pre-rendered hero cinematic frame sequences
scripts/
  render-frames.cjs  render the hero film   → node scripts/render-frames.cjs 90 team
  preview-frames.cjs preview timeline moments → node scripts/preview-frames.cjs 0 0.5 1
```

## The hero cinematic

The hero is a scroll-scrubbed image sequence (the "Apple product page" technique),
rendered offline from the real 3D employee models via [src/render/team.ts](src/render/team.ts).

To re-render after editing the timeline (dev server must be running):

```bash
node scripts/preview-frames.cjs 0 0.4 0.7 1   # check moments quickly
node scripts/render-frames.cjs 90 team        # landscape set
node scripts/render-frames.cjs 90 team-m      # portrait set (mobile)
```

## Design system

Brand tokens, type scale, spacing and motion rules live in
[.claude/skills/eligoo-design/SKILL.md](.claude/skills/eligoo-design/SKILL.md).

## Source assets

Raw `.glb` exports (50–100 MB each) are gitignored. Optimized copies in `public/models/`
are produced with:

```bash
npx @gltf-transform/cli optimize input.glb public/models/name.glb \
  --compress draco --texture-compress webp --texture-size 1024
```
