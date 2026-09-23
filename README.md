# Eligoo — AI Employees. Work From Cloud.

Marketing site for Eligoo: hire AI employees that work from the cloud.

## Stack

- **Vite + React + TypeScript**
- **Tailwind CSS v4** (`@tailwindcss/vite`)
- **react-router 7** + build-time prerender of every content page (SEO/AEO)
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
  content/           the content system — one PageContent file per page
    types.ts         PageContent + Section kinds (prose, list, steps, workflow, features, employees, faq, cta, related, sources, table, pricing, directory, blogfeed, example)
    helpers.ts       CRUMBS, LINKS, cta(), faq(), related(), employees(), pricingPointer(), FACTS
    index.ts         registry: PAGES / SECTIONS (drives prerender, sitemap, llms.txt)
    loader.ts        client-side per-section chunks (a page only loads its own section)
    nav.ts           mega-menu + footer structure
    <section>/       core, solutions, employees, industries, integrations, use-cases, compare, resources, guides, glossary, research, templates
  components/
    page/            PageView (hero + sections), Sections (every kind), CharacterStage (webp → lazy 3D)
    three/           react-three-fiber character viewer (loaded only on ≥768px, motion allowed, WebGL present)
    Nav.tsx, Footer.tsx, Plans.tsx (live /api/public/plans), BlogFeed.tsx, ui.tsx
  lib/head.tsx       Seo component: head tags at SSR time + document.head sync on navigation
  lib/seo.ts         JSON-LD builders (Organization, WebSite, SoftwareApplication, Article, DefinedTerm, HowTo, FAQPage, BreadcrumbList)
  entry-server.tsx   SSR entry: render(url) → { html, head }, routes(), llmsTxt()
  pages/             API-backed pages (BlogPost, LegalPage) + NotFound
public/
  brand/             logo + mark (source artwork, do not redraw)
  models/            Draco-compressed employee .glb models
  employees/         rendered character portraits (WebP) — hero fallback + mobile
  robots.txt, llms.txt (llms.txt is regenerated into dist/ on every build; copy it here to keep the committed file in sync)
scripts/prerender.mjs  post-build SSG of every registry route (see below)
server/              express API: blog, legal pages, leads, visitors, admin SPA, merged sitemap
docker/nginx.conf    static serving of dist/<path>/index.html, /blog → /resources/blog 301s, sitemap proxy
```

## Adding a page

1. Create `src/content/<section>/<slug>.ts` exporting a `PageContent` (copy `solutions/voice.ts`).
2. Add it to that section's `index.ts` array. That is all: the route, prerendered HTML, sitemap entry, llms.txt line and JSON-LD follow from the registry.

## Prerender, sitemap, redirects

- `npm run build` = `tsc -b && vite build && node scripts/prerender.mjs`. The prerender builds the SSR bundle, renders every
  registry route and writes `dist/<path>/index.html` with that page's `<title>`, description, canonical, Open Graph/Twitter and
  JSON-LD. `/` keeps the boot-on-interaction trick (React loads on first scroll/tap or after 8 s); other pages hydrate normally.
  It also writes `dist/app.html` (empty shell for blog posts and legal pages), `dist/404.html`, `dist/routes.json`,
  `dist/sitemap.xml` and `dist/llms.txt`.
- There is ONE sitemap at `/sitemap.xml`: nginx proxies it to the API, which merges `routes.json` from the website container
  with published blog posts and legal pages. If the API is down nginx serves the static `dist/sitemap.xml`.
- `/blog` and `/blog/:slug` are 301s to `/resources/blog/…` in nginx, in express and in the client router.
- Trailing slashes are canonical (`/solutions/voice/`); nginx redirects the slash-less form.

## IndexNow

To enable IndexNow (Bing and partners), generate a key, put it in `public/<key>.txt` containing the key itself, and submit URLs to
`https://api.indexnow.org/indexnow?url=<url>&key=<key>` after each deploy (for example from `deploy` tooling using `dist/routes.json`).
No key file is committed; this is a placeholder until a key is issued.

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
