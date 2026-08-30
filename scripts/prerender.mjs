// Post-build: SSG the landing route into dist/index.html, replacing the
// hand-written prepaint (the real hero now paints from static HTML).
import { execSync } from 'node:child_process';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
execSync('npx vite build --ssr src/entry-server.tsx --outDir dist-server --emptyOutDir', { cwd: root, stdio: 'inherit' });
const { render } = await import(pathToFileURL(path.join(root, 'dist-server/entry-server.js')).href);

const htmlPath = path.join(root, 'dist/index.html');
let html = fs.readFileSync(htmlPath, 'utf8');

// pristine copy for SPA deep links (blog, legal pages) and the api's meta injection
fs.writeFileSync(path.join(root, 'dist/app.html'), html);

const app = render('/');
// drop the prepaint block — superseded by the prerendered app
html = html.replace(/<style>\s*#prepaint[\s\S]*?<\/style>\s*/, '');
html = html.replace(/<div id="prepaint"[\s\S]*?<\/div>\s*(?=<div id="root">)/, '');
if (!html.includes('<div id="root"></div>')) throw new Error('root placeholder not found');
html = html.replace('<div id="root"></div>', `<div id="root">${app}</div>`);

// boot React only on real interaction (or a late fallback) — the traced page stays static
const entryMatch = html.match(/<script type="module"[^>]*src="([^"]+)"[^>]*><\/script>/);
if (!entryMatch) throw new Error('entry script not found');
const entrySrc = entryMatch[1];
html = html.replace(entryMatch[0], '');
html = html.replace(/\s*<link rel="modulepreload"[^>]*>/g, '');
html = html.replace(/\s*<link rel="preload" as="image"[^>]*>/g, '');
const boot = `<script>(function(){var d=0;function go(){if(d)return;d=1;var s=document.createElement('script');s.type='module';s.src='${entrySrc}';document.head.appendChild(s);}
['scroll','wheel','pointerdown','touchstart','keydown','mousemove'].forEach(function(e){addEventListener(e,go,{once:true,passive:true});});
setTimeout(go,8000);})();</script>`;
html = html.replace('</body>', boot + '</body>');

fs.writeFileSync(htmlPath, html);
fs.rmSync(path.join(root, 'dist-server'), { recursive: true, force: true });
console.log(`prerendered / (${(app.length / 1024).toFixed(1)} KB markup, boot-on-interaction) + app.html for deep links`);
