---
name: eligoo-design
description: Eligoo brand design system — tokens, type scale, spacing, component patterns and motion rules. Use for any UI work in this repo.
---

# Eligoo design system

Eligoo sells **AI employees that Work From Cloud (WFC)**. The site must feel like a premium
talent brand (people, roles, teams) — not an AI SaaS dashboard.

## Color tokens (never invent hex values)
- `ink` #041A17 — primary text, dark surfaces (Deep Black Green)
- `ink-2` #0B2B26 — secondary dark surface
- `coral` #FF5A36 — the single accent (CTAs, highlights, status dots)
- `coral-soft` #FFE9E3 — tint for chips/backgrounds on light
- `mist` #F3F6F4 — light section surface
- `line` #E1E8E5 — borders, dividers
- `muted` #5C6B67 — secondary text on light
- white #FFFFFF
One accent only. No gradients except the brand coral glow on dark surfaces. No purple, no glassmorphism stacks.

## Typography (2 faces max)
- Display: Nunito 900 (rounded, per brand sheet). Body/UI: Inter 400–700.
- Scale (px / line-height): display-xl 72/1.0 · display-lg 56/1.02 · h2 44/1.05 · h3 28/1.15 · body-lg 18/1.65 · body 16/1.65 · small 14/1.5 · eyebrow 11 caps, letter-spacing .22em.
- Fluid display sizes via clamp(); never exceed 2 display sizes on one screen.
- Eyebrow = coral 11px caps with a 24px rule. Every section starts with eyebrow → headline → one short lead.

## Spacing (8px grid)
- Section padding: 120px desktop / 80px mobile. Container max 1180px, gutters 20/40px.
- Card padding 24–32px. Radius: cards 28px, pills 999px, large panels 32px.
- Gaps: 16 / 24 / 40 / 64. No odd values.

## Component patterns
- Button: coral (primary), ink (secondary), ghost (on dark). Radius 999px, 14px semibold, arrow icon, hover scale 1.04 / y −1.
- Employee card: white, 1px `line`, radius 28px. Top: mist stage with the character cutout + "● WFC · ONLINE" ink pill. Body: name (Nunito 900 22px), role (coral 14px semibold), one-line tagline (muted 13px), arrow chip. Hover: lift −8px, soft shadow, character pops.
- Stat/plan cards: mist surface, featured card = ink surface with coral pill.
- Comparison rows: left muted, right white semibold with coral arrow.

## Motion
- Framer Motion for reveals: fade + 24px rise, 0.7s, ease [0.4,0,0.2,1], stagger 80ms, once.
- Scroll-scrubbed cinematics use GSAP ScrollTrigger + the `FrameScrubber` canvas component.
- Hover: lift −6/−8px, 150–250ms. Respect `prefers-reduced-motion` (show end state).
- Never animate opacity with framer's scroll-linked values directly — use `useScrollProgress` (see ui.tsx).

## Avoid the generic AI aesthetic
- No centered-everything; use editorial asymmetry (sticky headline left, content right).
- No stock icons as hero art — the characters and the real brand mark are the art.
- Real copy from the Eligoo site copy doc; no lorem, no "Lorem-ish" feature lists.
- Brand marks: use `/brand/logo.svg`, `/brand/logo-white.svg`, `/brand/mark.png`, `/brand/mark-white.png` untouched. Never redraw the logo.
