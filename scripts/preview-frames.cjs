// node scripts/preview-frames.cjs 0 0.4 0.7 0.92  → scratchpad/preview.png contact sheet
const { chromium } = require('/private/tmp/claude-501/-Users-sk-projects-website/49bbe727-cf0b-453a-b92e-b769bfa90175/scratchpad/node_modules/playwright-core');
const fs = require('fs');
const ts = process.argv.slice(2).map(Number);
(async () => {
  const b = await chromium.launch({ channel: 'chrome', headless: true, args: ['--use-angle=swiftshader-webgl', '--enable-unsafe-swiftshader'] });
  const portrait = process.env.PV_PORTRAIT === '1';
  const p = await b.newPage({ viewport: portrait ? { width: 1152, height: 2048 } : { width: 2048, height: 1152 } });
  await p.goto('http://localhost:5173/render.html' + (portrait ? '?portrait=1' : ''));
  await p.waitForFunction(() => window.__ready === true, null, { timeout: 30000 });
  for (let i = 0; i < ts.length; i++) {
    const url = await p.evaluate((t) => window.renderFrame(t), ts[i]);
    fs.writeFileSync(`/private/tmp/claude-501/-Users-sk-projects-website/49bbe727-cf0b-453a-b92e-b769bfa90175/scratchpad/pv_${i}.webp`, Buffer.from(url.split(',')[1], 'base64'));
  }
  await b.close();
})();
