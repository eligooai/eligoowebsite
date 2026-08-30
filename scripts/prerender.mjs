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
const app = render('/');
// drop the prepaint block — superseded by the prerendered app
html = html.replace(/<style>\s*#prepaint[\s\S]*?<\/style>\s*/, '');
html = html.replace(/<div id="prepaint"[\s\S]*?<\/div>\s*(?=<div id="root">)/, '');
if (!html.includes('<div id="root"></div>')) throw new Error('root placeholder not found');
html = html.replace('<div id="root"></div>', `<div id="root">${app}</div>`);
fs.writeFileSync(htmlPath, html);
fs.rmSync(path.join(root, 'dist-server'), { recursive: true, force: true });
console.log(`prerendered / into dist/index.html (${(app.length / 1024).toFixed(1)} KB of markup)`);
