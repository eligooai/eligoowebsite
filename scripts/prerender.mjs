// Post-build static generation.
//
// 1. Builds the SSR bundle of src/entry-server.tsx.
// 2. Renders every route in the content registry and writes dist/<path>/index.html with that
//    page's markup and head tags (title, description, canonical, Open Graph, JSON-LD).
//    "/" keeps the boot-on-interaction trick (React loads on first scroll/tap or after 8 s);
//    every other page ships the normal module script and hydrates immediately.
// 3. Writes dist/app.html (pristine shell for the API-backed blog/legal pages), dist/404.html,
//    dist/routes.json (merged into the sitemap by the express API), dist/sitemap.xml (static
//    fallback served when the API is down) and dist/llms.txt.
import { execSync } from 'node:child_process';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const dist = path.join(root, 'dist');
const SITE = process.env.SITE_URL || 'https://eligoo.in';

execSync('npx vite build --ssr src/entry-server.tsx --outDir dist-server --emptyOutDir --logLevel warn', { cwd: root, stdio: 'inherit' });
const { render, routes, llmsTxt } = await import(pathToFileURL(path.join(root, 'dist-server/entry-server.js')).href);

const template = fs.readFileSync(path.join(dist, 'index.html'), 'utf8');
if (!template.includes('<div id="root"></div>')) throw new Error('root placeholder not found in dist/index.html');

// pristine shell for SPA-only pages (blog posts, legal pages, admin-driven content)
fs.writeFileSync(path.join(dist, 'app.html'), template);

const entryMatch = template.match(/<script type="module"[^>]*src="([^"]+)"[^>]*><\/script>/);
if (!entryMatch) throw new Error('entry script not found');
const entrySrc = entryMatch[1];

function document(url, { bootOnInteraction = false } = {}) {
  const { html, head } = render(url);
  let out = template;
  // replace the template's generic title/description with the page's head block
  out = out.replace(/<title>[\s\S]*?<\/title>\s*/, '');
  out = out.replace(/<meta name="description"[^>]*>\s*/, '');
  out = out.replace('</head>', `${head}\n</head>`);
  out = out.replace('<div id="root"></div>', `<div id="root">${html}</div>`);
  if (bootOnInteraction) {
    out = out.replace(entryMatch[0], '');
    out = out.replace(/\s*<link rel="modulepreload"[^>]*>/g, '');
    const boot = `<script>(function(){var d=0;function go(){if(d)return;d=1;var s=document.createElement('script');s.type='module';s.src='${entrySrc}';document.head.appendChild(s);}
['scroll','wheel','pointerdown','touchstart','keydown','mousemove'].forEach(function(e){addEventListener(e,go,{once:true,passive:true});});
setTimeout(go,8000);})();</script>`;
    out = out.replace('</body>', boot + '</body>');
  }
  return out;
}

const list = routes();
let bytes = 0;
for (const r of list) {
  const file = r.path === '/' ? path.join(dist, 'index.html') : path.join(dist, r.path, 'index.html');
  fs.mkdirSync(path.dirname(file), { recursive: true });
  const html = document(r.path, { bootOnInteraction: r.path === '/' });
  bytes += html.length;
  fs.writeFileSync(file, html);
}
fs.writeFileSync(path.join(dist, '404.html'), document('/__not_found__/'));

// routes.json — the API merges this with blog posts and legal pages into the one sitemap
fs.writeFileSync(path.join(dist, 'routes.json'), JSON.stringify(list));

// static sitemap — served only when the API is unreachable (nginx error_page fallback)
const xmlEsc = (u) => u.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/'/g, '&apos;').replace(/"/g, '&quot;');
const urls = list.map((r) => `<url><loc>${xmlEsc(SITE + r.path)}</loc><lastmod>${r.lastmod}</lastmod></url>`).join('');
fs.writeFileSync(path.join(dist, 'sitemap.xml'), `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${urls}</urlset>\n`);

fs.writeFileSync(path.join(dist, 'llms.txt'), llmsTxt(SITE));

fs.rmSync(path.join(root, 'dist-server'), { recursive: true, force: true });
console.log(`prerendered ${list.length} routes (${(bytes / 1024 / 1024).toFixed(1)} MB html) + 404.html, app.html, routes.json, sitemap.xml, llms.txt`);
