import express from 'express';
import path from 'path';
import fs from 'fs';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';
import multer from 'multer';
import { nanoid } from 'nanoid';
import { UAParser } from 'ua-parser-js';
import geoip from 'geoip-lite';
import cookieParser from 'cookie-parser';
import { db, JWT_SECRET, getSetting, setSetting } from './db.js';

const app = express();
app.set('trust proxy', true);
app.use(express.json({ limit: '15mb' }));
app.use(cookieParser());

const DATA_DIR = process.env.DATA_DIR || '/data';
const SITE_URL = process.env.SITE_URL || 'https://eligoo.in';
const WEBSITE_ORIGIN = process.env.WEBSITE_ORIGIN || 'http://eligoo-website';

/* ---------------- helpers ---------------- */
const slugify = (s) => s.toLowerCase().trim().replace(/[^a-z0-9\s-]/g, '').replace(/[\s_]+/g, '-').replace(/-+/g, '-').replace(/^-|-$/g, '').slice(0, 96) || 'post';
const uniqueSlug = (base, table, ignoreId = 0) => {
  let slug = slugify(base); let i = 1;
  while (db.prepare(`SELECT id FROM ${table} WHERE slug=? AND id!=?`).get(slug, ignoreId)) slug = `${slugify(base)}-${++i}`;
  return slug;
};
const esc = (s = '') => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
const stripHtml = (h = '') => h.replace(/<[^>]*>/g, ' ').replace(/\s+/g, ' ').trim();

const auth = (req, res, next) => {
  const h = req.headers.authorization || '';
  const token = h.startsWith('Bearer ') ? h.slice(7) : null;
  if (!token) return res.status(401).json({ error: 'unauthorized' });
  try { req.user = jwt.verify(token, JWT_SECRET); next(); }
  catch { res.status(401).json({ error: 'unauthorized' }); }
};
const apiKeyAuth = (req, res, next) => {
  const h = req.headers.authorization || '';
  const key = h.startsWith('Bearer ') ? h.slice(7) : null;
  const row = key && db.prepare('SELECT * FROM api_keys WHERE key=?').get(key);
  if (!row) return res.status(401).json({ error: 'invalid api key' });
  db.prepare("UPDATE api_keys SET last_used=datetime('now') WHERE id=?").run(row.id);
  req.apiKey = row; next();
};

/* ---------------- tracking ---------------- */
const BOT_RE = /bot|crawl|spider|slurp|headless|lighthouse|pingdom|monitor|curl|wget|python-requests/i;
app.post('/eapi/track', (req, res) => {
  try {
    const ua = req.headers['user-agent'] || '';
    if (BOT_RE.test(ua)) return res.json({ ok: true });
    const { visitorId, sessionId, path: p, referrer, screenW } = req.body || {};
    const ip = (req.headers['x-forwarded-for'] || req.ip || '').split(',')[0].trim();
    const geo = ip ? geoip.lookup(ip) : null;
    const parsed = new UAParser(ua).getResult();
    const device = parsed.device.type === 'mobile' ? 'mobile' : parsed.device.type === 'tablet' ? 'tablet' : 'desktop';
    db.prepare(`INSERT INTO visits (visitor_id, session_id, path, referrer, ip, country, region, city, device, browser, os, screen_w)
      VALUES (?,?,?,?,?,?,?,?,?,?,?,?)`).run(
      String(visitorId || '').slice(0, 40), String(sessionId || '').slice(0, 40),
      String(p || '/').slice(0, 300), String(referrer || '').slice(0, 300), ip,
      geo?.country || '', geo?.region || '', geo?.city || '',
      device, parsed.browser.name || '', parsed.os.name || '', Number(screenW) || null);
  } catch { /* tracking must never break the site */ }
  res.json({ ok: true });
});

/* ---------------- public: blog / pages / social / leads ---------------- */
const PUB_BLOG = 'id,title,slug,excerpt,topic,tags,cover,seo_title,seo_desc,canonical,published_at,views';
app.get('/eapi/blogs', (req, res) => {
  const page = Math.max(1, parseInt(req.query.page) || 1);
  const per = Math.min(24, parseInt(req.query.per) || 9);
  const topic = (req.query.topic || '').toString();
  const where = topic ? "status='published' AND topic=?" : "status='published'";
  const args = topic ? [topic] : [];
  const total = db.prepare(`SELECT COUNT(*) c FROM blogs WHERE ${where}`).get(...args).c;
  const items = db.prepare(`SELECT ${PUB_BLOG} FROM blogs WHERE ${where} ORDER BY published_at DESC LIMIT ? OFFSET ?`)
    .all(...args, per, (page - 1) * per);
  const topics = db.prepare("SELECT DISTINCT topic FROM blogs WHERE status='published' AND topic!='' ORDER BY topic").all().map(r => r.topic);
  res.json({ items, total, page, per, pages: Math.max(1, Math.ceil(total / per)), topics });
});
app.get('/eapi/blogs/:slug', (req, res) => {
  const b = db.prepare(`SELECT ${PUB_BLOG},html FROM blogs WHERE slug=? AND status='published'`).get(req.params.slug);
  if (!b) return res.status(404).json({ error: 'not found' });
  db.prepare('UPDATE blogs SET views=views+1 WHERE id=?').run(b.id);
  const more = db.prepare(`SELECT ${PUB_BLOG} FROM blogs WHERE status='published' AND id!=? ORDER BY published_at DESC LIMIT 3`).all(b.id);
  res.json({ ...b, more });
});
app.get('/eapi/pages', (_req, res) =>
  res.json(db.prepare('SELECT title, slug FROM pages WHERE show_in_footer=1 ORDER BY id').all()));
app.get('/eapi/pages/:slug', (req, res) => {
  const p = db.prepare('SELECT title, slug, html, updated_at FROM pages WHERE slug=?').get(req.params.slug);
  if (!p) return res.status(404).json({ error: 'not found' });
  res.json(p);
});
app.get('/eapi/social', (_req, res) => res.json(JSON.parse(getSetting('social') || '{}')));
app.post('/eapi/leads', (req, res) => {
  const { name = '', email = '', company = '', message = '', sourcePath = '' } = req.body || {};
  if (!email || !/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)) return res.status(400).json({ error: 'valid email required' });
  db.prepare('INSERT INTO leads (name,email,company,message,source_path) VALUES (?,?,?,?,?)')
    .run(String(name).slice(0, 120), String(email).slice(0, 200), String(company).slice(0, 160), String(message).slice(0, 3000), String(sourcePath).slice(0, 300));
  res.json({ ok: true });
});

/* ---------------- auth ---------------- */
app.post('/eapi/auth/login', (req, res) => {
  const { email, password } = req.body || {};
  const u = db.prepare('SELECT * FROM users WHERE email=?').get(String(email || '').toLowerCase().trim());
  if (!u || !bcrypt.compareSync(String(password || ''), u.password_hash)) return res.status(401).json({ error: 'invalid credentials' });
  res.json({ token: jwt.sign({ uid: u.id, email: u.email }, JWT_SECRET, { expiresIn: '7d' }), email: u.email });
});
app.put('/eapi/admin/password', auth, (req, res) => {
  const { current, next } = req.body || {};
  const u = db.prepare('SELECT * FROM users WHERE id=?').get(req.user.uid);
  if (!bcrypt.compareSync(String(current || ''), u.password_hash)) return res.status(400).json({ error: 'current password wrong' });
  if (String(next || '').length < 8) return res.status(400).json({ error: 'min 8 characters' });
  db.prepare('UPDATE users SET password_hash=? WHERE id=?').run(bcrypt.hashSync(next, 10), u.id);
  res.json({ ok: true });
});

/* ---------------- admin: analytics ---------------- */
app.get('/eapi/admin/analytics/summary', auth, (req, res) => {
  const days = Math.min(90, parseInt(req.query.days) || 30);
  const since = `-${days} days`;
  const q = (sql, ...a) => db.prepare(sql).all(...a);
  const one = (sql, ...a) => db.prepare(sql).get(...a);
  res.json({
    totals: {
      visitors: one("SELECT COUNT(DISTINCT visitor_id) c FROM visits WHERE ts >= datetime('now', ?)", since).c,
      pageviews: one("SELECT COUNT(*) c FROM visits WHERE ts >= datetime('now', ?)", since).c,
      today: one("SELECT COUNT(DISTINCT visitor_id) c FROM visits WHERE date(ts)=date('now')").c,
      leads: one('SELECT COUNT(*) c FROM leads').c,
      blogs: one("SELECT COUNT(*) c FROM blogs WHERE status='published'").c,
    },
    byDay: q("SELECT date(ts) d, COUNT(DISTINCT visitor_id) visitors, COUNT(*) views FROM visits WHERE ts >= datetime('now', ?) GROUP BY d ORDER BY d", since),
    byCountry: q("SELECT CASE WHEN country='' THEN 'Unknown' ELSE country END k, COUNT(DISTINCT visitor_id) c FROM visits WHERE ts >= datetime('now', ?) GROUP BY k ORDER BY c DESC LIMIT 12", since),
    byDevice: q("SELECT device k, COUNT(DISTINCT visitor_id) c FROM visits WHERE ts >= datetime('now', ?) GROUP BY k", since),
    byBrowser: q("SELECT browser k, COUNT(DISTINCT visitor_id) c FROM visits WHERE ts >= datetime('now', ?) AND browser!='' GROUP BY k ORDER BY c DESC LIMIT 8", since),
    topPages: q("SELECT path k, COUNT(*) c FROM visits WHERE ts >= datetime('now', ?) GROUP BY k ORDER BY c DESC LIMIT 10", since),
    topReferrers: q("SELECT referrer k, COUNT(*) c FROM visits WHERE ts >= datetime('now', ?) AND referrer!='' GROUP BY k ORDER BY c DESC LIMIT 10", since),
  });
});
app.get('/eapi/admin/analytics/visits', auth, (req, res) => {
  const page = Math.max(1, parseInt(req.query.page) || 1); const per = 50;
  const total = db.prepare('SELECT COUNT(*) c FROM visits').get().c;
  const items = db.prepare('SELECT ts, path, referrer, country, region, city, device, browser, os, visitor_id FROM visits ORDER BY id DESC LIMIT ? OFFSET ?').all(per, (page - 1) * per);
  res.json({ items, total, page, pages: Math.max(1, Math.ceil(total / per)) });
});

/* ---------------- admin: blogs ---------------- */
app.get('/eapi/admin/blogs', auth, (_req, res) =>
  res.json(db.prepare('SELECT id,title,slug,topic,status,views,source,updated_at,published_at,cover FROM blogs ORDER BY updated_at DESC').all()));
app.get('/eapi/admin/blogs/:id', auth, (req, res) => {
  const b = db.prepare('SELECT * FROM blogs WHERE id=?').get(req.params.id);
  if (!b) return res.status(404).json({ error: 'not found' });
  res.json(b);
});
const upsertBlog = (body, id = 0) => {
  const { title = '', slug = '', html = '', excerpt = '', topic = '', tags = '', cover = '', seo_title = '', seo_desc = '', canonical = '', status = 'draft' } = body;
  const finalSlug = uniqueSlug(slug || title, 'blogs', id);
  const publishedAt = status === 'published'
    ? (id ? (db.prepare('SELECT published_at FROM blogs WHERE id=?').get(id)?.published_at || new Date().toISOString()) : new Date().toISOString())
    : null;
  return { title, slug: finalSlug, html, excerpt: excerpt || stripHtml(html).slice(0, 200), topic, tags, cover, seo_title, seo_desc, canonical, status, publishedAt };
};
app.post('/eapi/admin/blogs', auth, (req, res) => {
  const b = upsertBlog(req.body);
  if (!b.title) return res.status(400).json({ error: 'title required' });
  const r = db.prepare(`INSERT INTO blogs (title,slug,html,excerpt,topic,tags,cover,seo_title,seo_desc,canonical,status,published_at)
    VALUES (?,?,?,?,?,?,?,?,?,?,?,?)`).run(b.title, b.slug, b.html, b.excerpt, b.topic, b.tags, b.cover, b.seo_title, b.seo_desc, b.canonical, b.status, b.publishedAt);
  res.json({ id: r.lastInsertRowid, slug: b.slug });
});
app.put('/eapi/admin/blogs/:id', auth, (req, res) => {
  const id = Number(req.params.id);
  if (!db.prepare('SELECT id FROM blogs WHERE id=?').get(id)) return res.status(404).json({ error: 'not found' });
  const b = upsertBlog(req.body, id);
  db.prepare(`UPDATE blogs SET title=?,slug=?,html=?,excerpt=?,topic=?,tags=?,cover=?,seo_title=?,seo_desc=?,canonical=?,status=?,published_at=?,updated_at=datetime('now') WHERE id=?`)
    .run(b.title, b.slug, b.html, b.excerpt, b.topic, b.tags, b.cover, b.seo_title, b.seo_desc, b.canonical, b.status, b.publishedAt, id);
  res.json({ ok: true, slug: b.slug });
});
app.delete('/eapi/admin/blogs/:id', auth, (req, res) => {
  db.prepare('DELETE FROM blogs WHERE id=?').run(req.params.id); res.json({ ok: true });
});

/* ---------------- admin: leads / pages / social / api keys ---------------- */
app.get('/eapi/admin/leads', auth, (_req, res) =>
  res.json(db.prepare('SELECT * FROM leads ORDER BY id DESC LIMIT 500').all()));
app.delete('/eapi/admin/leads/:id', auth, (req, res) => {
  db.prepare('DELETE FROM leads WHERE id=?').run(req.params.id); res.json({ ok: true });
});
app.get('/eapi/admin/pages', auth, (_req, res) =>
  res.json(db.prepare('SELECT id,title,slug,show_in_footer,updated_at FROM pages ORDER BY id').all()));
app.get('/eapi/admin/pages/:id', auth, (req, res) => {
  const p = db.prepare('SELECT * FROM pages WHERE id=?').get(req.params.id);
  if (!p) return res.status(404).json({ error: 'not found' });
  res.json(p);
});
app.post('/eapi/admin/pages', auth, (req, res) => {
  const { title = '', html = '', slug = '', show_in_footer = 1 } = req.body || {};
  if (!title) return res.status(400).json({ error: 'title required' });
  const s = uniqueSlug(slug || title, 'pages');
  const r = db.prepare('INSERT INTO pages (title,slug,html,show_in_footer) VALUES (?,?,?,?)').run(title, s, html, show_in_footer ? 1 : 0);
  res.json({ id: r.lastInsertRowid, slug: s });
});
app.put('/eapi/admin/pages/:id', auth, (req, res) => {
  const id = Number(req.params.id);
  const { title = '', html = '', slug = '', show_in_footer = 1 } = req.body || {};
  const s = uniqueSlug(slug || title, 'pages', id);
  db.prepare("UPDATE pages SET title=?,slug=?,html=?,show_in_footer=?,updated_at=datetime('now') WHERE id=?").run(title, s, html, show_in_footer ? 1 : 0, id);
  res.json({ ok: true, slug: s });
});
app.delete('/eapi/admin/pages/:id', auth, (req, res) => {
  db.prepare('DELETE FROM pages WHERE id=?').run(req.params.id); res.json({ ok: true });
});
app.get('/eapi/admin/social', auth, (_req, res) => res.json(JSON.parse(getSetting('social') || '{}')));
app.put('/eapi/admin/social', auth, (req, res) => {
  const allowed = ['linkedin', 'x', 'instagram', 'youtube', 'facebook'];
  const clean = {}; for (const k of allowed) clean[k] = String((req.body || {})[k] || '').slice(0, 300);
  setSetting('social', JSON.stringify(clean)); res.json({ ok: true });
});
app.get('/eapi/admin/api-keys', auth, (_req, res) =>
  res.json(db.prepare('SELECT id,name,key,created_at,last_used FROM api_keys ORDER BY id DESC').all()));
app.post('/eapi/admin/api-keys', auth, (req, res) => {
  const key = 'elg_' + nanoid(36);
  const r = db.prepare('INSERT INTO api_keys (name, key) VALUES (?, ?)').run(String(req.body?.name || 'default').slice(0, 60), key);
  res.json({ id: r.lastInsertRowid, key });
});
app.delete('/eapi/admin/api-keys/:id', auth, (req, res) => {
  db.prepare('DELETE FROM api_keys WHERE id=?').run(req.params.id); res.json({ ok: true });
});

/* ---------------- uploads ---------------- */
const upload = multer({
  storage: multer.diskStorage({
    destination: path.join(DATA_DIR, 'uploads'),
    filename: (_req, file, cb) => cb(null, nanoid(12) + path.extname(file.originalname).toLowerCase().slice(0, 8)),
  }),
  limits: { fileSize: 12 * 1024 * 1024 },
  fileFilter: (_req, file, cb) => cb(null, /^image\/(png|jpe?g|webp|gif|avif|svg\+xml)$/.test(file.mimetype)),
});
app.post('/eapi/admin/upload', auth, upload.single('file'), (req, res) => {
  if (!req.file) return res.status(400).json({ error: 'no file' });
  res.json({ url: '/media/' + req.file.filename });
});
app.use('/media', express.static(path.join(DATA_DIR, 'uploads'), { maxAge: '30d', immutable: true }));

/* ---------------- external posting API ---------------- */
app.post('/eapi/v1/posts', apiKeyAuth, (req, res) => {
  const { title, slug = '', html = '', excerpt = '', topic = '', tags = '', cover = '', seo_title = '', seo_description = '', canonical = '', publish = true, image_base64 = '' } = req.body || {};
  if (!title || !html) return res.status(400).json({ error: 'title and html are required' });
  let coverUrl = String(cover || '');
  if (image_base64) {
    try {
      const m = image_base64.match(/^data:image\/(png|jpe?g|webp);base64,(.+)$/);
      if (m) {
        const name = nanoid(12) + '.' + (m[1] === 'jpeg' ? 'jpg' : m[1]);
        fs.writeFileSync(path.join(DATA_DIR, 'uploads', name), Buffer.from(m[2], 'base64'));
        coverUrl = '/media/' + name;
      }
    } catch { /* keep cover as-is */ }
  }
  const finalSlug = uniqueSlug(slug || title, 'blogs');
  const status = publish ? 'published' : 'draft';
  const r = db.prepare(`INSERT INTO blogs (title,slug,html,excerpt,topic,tags,cover,seo_title,seo_desc,canonical,status,source,published_at)
    VALUES (?,?,?,?,?,?,?,?,?,?,?,'api',?)`).run(
    String(title).slice(0, 200), finalSlug, String(html), String(excerpt).slice(0, 300), String(topic).slice(0, 60),
    Array.isArray(tags) ? tags.join(',') : String(tags), coverUrl, String(seo_title).slice(0, 200), String(seo_description).slice(0, 300),
    String(canonical).slice(0, 300), status, publish ? new Date().toISOString() : null);
  res.json({ ok: true, id: r.lastInsertRowid, slug: finalSlug, url: `${SITE_URL}/blog/${finalSlug}`, status });
});

/* ---------------- SEO meta-injection for /blog pages ---------------- */
let indexCache = { html: '', at: 0 };
async function siteIndex() {
  if (indexCache.html && Date.now() - indexCache.at < 60_000) return indexCache.html;
  const r = await fetch(WEBSITE_ORIGIN + '/index.html');
  indexCache = { html: await r.text(), at: Date.now() };
  return indexCache.html;
}
function withMeta(html, m) {
  const meta = `
<title>${esc(m.title)}</title>
<meta name="description" content="${esc(m.desc)}" />
<link rel="canonical" href="${esc(m.canonical)}" />
<meta property="og:type" content="${m.type}" /><meta property="og:site_name" content="Eligoo" />
<meta property="og:title" content="${esc(m.title)}" /><meta property="og:description" content="${esc(m.desc)}" />
<meta property="og:url" content="${esc(m.canonical)}" />${m.image ? `<meta property="og:image" content="${esc(m.image)}" />` : ''}
<meta name="twitter:card" content="${m.image ? 'summary_large_image' : 'summary'}" />
${m.jsonld ? `<script type="application/ld+json">${m.jsonld}</script>` : ''}`;
  return html
    .replace(/<title>[\s\S]*?<\/title>/, '')
    .replace(/<meta name="description"[^>]*>/, '')
    .replace('</head>', meta + '\n</head>');
}
app.get(['/render/blog', '/render/blog/'], async (_req, res) => {
  try {
    const html = withMeta(await siteIndex(), {
      title: 'Blog — Eligoo | AI Employees. Work From Cloud.',
      desc: 'Ideas, playbooks and product updates from Eligoo — hire AI employees that work from the cloud.',
      canonical: `${SITE_URL}/blog`, type: 'website', image: `${SITE_URL}/employees/atlas.webp`,
    });
    res.type('html').send(html);
  } catch { res.status(503).send('unavailable'); }
});
app.get('/render/blog/:slug', async (req, res) => {
  try {
    const b = db.prepare("SELECT * FROM blogs WHERE slug=? AND status='published'").get(req.params.slug);
    const base = await siteIndex();
    if (!b) return res.type('html').status(404).send(base);
    const img = b.cover ? (b.cover.startsWith('http') ? b.cover : SITE_URL + b.cover) : '';
    const html = withMeta(base, {
      title: (b.seo_title || b.title) + ' — Eligoo Blog',
      desc: b.seo_desc || b.excerpt || stripHtml(b.html).slice(0, 160),
      canonical: b.canonical || `${SITE_URL}/blog/${b.slug}`, type: 'article', image: img,
      jsonld: JSON.stringify({ '@context': 'https://schema.org', '@type': 'Article', headline: b.title, datePublished: b.published_at, image: img || undefined, author: { '@type': 'Organization', name: 'Eligoo' }, publisher: { '@type': 'Organization', name: 'Eligoo' }, mainEntityOfPage: `${SITE_URL}/blog/${b.slug}` }),
    });
    res.type('html').send(html);
  } catch { res.status(503).send('unavailable'); }
});

/* ---------------- sitemap for blogs ---------------- */
app.get('/eapi/sitemap.xml', (_req, res) => {
  const blogs = db.prepare("SELECT slug, updated_at FROM blogs WHERE status='published'").all();
  const urls = [`<url><loc>${SITE_URL}/</loc></url>`, `<url><loc>${SITE_URL}/blog</loc></url>`,
    ...blogs.map(b => `<url><loc>${SITE_URL}/blog/${b.slug}</loc><lastmod>${b.updated_at.slice(0, 10)}</lastmod></url>`)];
  res.type('application/xml').send(`<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${urls.join('')}</urlset>`);
});

/* ---------------- admin SPA (admin.eligoo.in) ---------------- */
const ADMIN_DIST = process.env.ADMIN_DIST || path.resolve('admin-dist');
if (fs.existsSync(ADMIN_DIST)) {
  app.use(express.static(ADMIN_DIST, { index: false }));
  app.get(/^\/(?!eapi|media|render).*/, (_req, res) => res.sendFile(path.join(ADMIN_DIST, 'index.html')));
}

app.listen(4000, () => console.log('eligoo-api listening on :4000'));
