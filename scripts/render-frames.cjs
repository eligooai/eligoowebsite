// node scripts-render-frames.js  → writes public/frames/logo/frame_###.webp
const { chromium } = require('/private/tmp/claude-501/-Users-sk-projects-website/49bbe727-cf0b-453a-b92e-b769bfa90175/scratchpad/node_modules/playwright-core');
const fs = require('fs');
const N = parseInt(process.argv[2] || '80', 10);
const name = process.argv[3] || 'team';
const portrait = name.endsWith('-m');
const out = 'public/frames/' + name;
fs.mkdirSync(out, { recursive: true });
(async () => {
  const b = await chromium.launch({ channel: 'chrome', headless: true, args: ['--use-angle=swiftshader-webgl', '--enable-unsafe-swiftshader'] });
  const p = await b.newPage({ viewport: { width: portrait ? 1152 : 2048, height: portrait ? 2048 : 1152 } });
  p.on('console', (m) => m.type() === 'error' && console.log('console', m.text().slice(0, 200)));
  await p.goto('http://localhost:5173/render.html' + (portrait ? '?portrait=1' : ''));
  await p.waitForFunction(() => window.__ready === true, null, { timeout: 30000 });
  let total = 0;
  for (let i = 0; i < N; i++) {
    const url = await p.evaluate((t) => window.renderFrame(t), i / (N - 1));
    const buf = Buffer.from(url.split(',')[1], 'base64');
    fs.writeFileSync(`${out}/frame_${String(i).padStart(3, '0')}.webp`, buf);
    total += buf.length;
  }
  console.log(`wrote ${N} frames, ${(total / 1024 / 1024).toFixed(2)} MB total`);
  await b.close();
})();
