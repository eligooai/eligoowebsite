import Database from 'better-sqlite3';
import fs from 'fs';
import path from 'path';
import bcrypt from 'bcryptjs';
import crypto from 'crypto';

const DATA_DIR = process.env.DATA_DIR || '/data';
fs.mkdirSync(path.join(DATA_DIR, 'uploads'), { recursive: true });

export const db = new Database(path.join(DATA_DIR, 'eligoo.db'));
db.pragma('journal_mode = WAL');

db.exec(`
CREATE TABLE IF NOT EXISTS users (
  id INTEGER PRIMARY KEY, email TEXT UNIQUE NOT NULL, password_hash TEXT NOT NULL, created_at TEXT DEFAULT (datetime('now'))
);
CREATE TABLE IF NOT EXISTS blogs (
  id INTEGER PRIMARY KEY, title TEXT NOT NULL, slug TEXT UNIQUE NOT NULL,
  html TEXT NOT NULL DEFAULT '', excerpt TEXT DEFAULT '', topic TEXT DEFAULT '',
  tags TEXT DEFAULT '', cover TEXT DEFAULT '',
  seo_title TEXT DEFAULT '', seo_desc TEXT DEFAULT '', canonical TEXT DEFAULT '',
  status TEXT NOT NULL DEFAULT 'draft', views INTEGER NOT NULL DEFAULT 0,
  source TEXT NOT NULL DEFAULT 'editor',
  created_at TEXT DEFAULT (datetime('now')), updated_at TEXT DEFAULT (datetime('now')), published_at TEXT
);
CREATE TABLE IF NOT EXISTS leads (
  id INTEGER PRIMARY KEY, ts TEXT DEFAULT (datetime('now')),
  name TEXT DEFAULT '', email TEXT NOT NULL, company TEXT DEFAULT '', message TEXT DEFAULT '',
  source_path TEXT DEFAULT ''
);
CREATE TABLE IF NOT EXISTS pages (
  id INTEGER PRIMARY KEY, title TEXT NOT NULL, slug TEXT UNIQUE NOT NULL,
  html TEXT NOT NULL DEFAULT '', show_in_footer INTEGER NOT NULL DEFAULT 1,
  updated_at TEXT DEFAULT (datetime('now'))
);
CREATE TABLE IF NOT EXISTS settings ( key TEXT PRIMARY KEY, value TEXT NOT NULL DEFAULT '' );
CREATE TABLE IF NOT EXISTS api_keys (
  id INTEGER PRIMARY KEY, name TEXT NOT NULL, key TEXT UNIQUE NOT NULL,
  created_at TEXT DEFAULT (datetime('now')), last_used TEXT
);
CREATE TABLE IF NOT EXISTS visits (
  id INTEGER PRIMARY KEY, ts TEXT DEFAULT (datetime('now')),
  visitor_id TEXT, session_id TEXT, path TEXT, referrer TEXT DEFAULT '',
  ip TEXT, country TEXT DEFAULT '', region TEXT DEFAULT '', city TEXT DEFAULT '',
  device TEXT DEFAULT 'desktop', browser TEXT DEFAULT '', os TEXT DEFAULT '', screen_w INTEGER
);
CREATE TABLE IF NOT EXISTS redirects (
  id INTEGER PRIMARY KEY, old_slug TEXT UNIQUE NOT NULL, new_slug TEXT NOT NULL,
  created_at TEXT DEFAULT (datetime('now'))
);
CREATE INDEX IF NOT EXISTS idx_visits_ts ON visits(ts);
CREATE INDEX IF NOT EXISTS idx_visits_visitor ON visits(visitor_id);
CREATE INDEX IF NOT EXISTS idx_blogs_status ON blogs(status);
`);

// --- migrations (idempotent) ---
const addColumn = (table, col, def) => {
  const has = db.prepare(`PRAGMA table_info(${table})`).all().some((c) => c.name === col);
  if (!has) db.exec(`ALTER TABLE ${table} ADD COLUMN ${col} ${def}`);
};
addColumn('blogs', 'indexable', 'INTEGER NOT NULL DEFAULT 1');
addColumn('pages', 'indexable', 'INTEGER NOT NULL DEFAULT 1');

// --- one-time seeds ---
const secretPath = path.join(DATA_DIR, 'jwt-secret');
if (!fs.existsSync(secretPath)) fs.writeFileSync(secretPath, crypto.randomBytes(48).toString('hex'));
export const JWT_SECRET = fs.readFileSync(secretPath, 'utf8').trim();

// Admin credentials: ADMIN_EMAIL / ADMIN_PASSWORD env are authoritative when set —
// the user is created or its password reset to match on every boot.
const envEmail = (process.env.ADMIN_EMAIL || '').toLowerCase().trim();
const envPw = process.env.ADMIN_PASSWORD || '';
if (envEmail && envPw) {
  const existing = db.prepare('SELECT id FROM users WHERE email=?').get(envEmail);
  const hash = bcrypt.hashSync(envPw, 10);
  if (existing) db.prepare('UPDATE users SET password_hash=? WHERE id=?').run(hash, existing.id);
  else db.prepare('INSERT INTO users (email, password_hash) VALUES (?, ?)').run(envEmail, hash);
  console.log('[seed] admin credentials synced from env for', envEmail);
} else if (db.prepare('SELECT COUNT(*) c FROM users').get().c === 0) {
  const pw = crypto.randomBytes(9).toString('base64url');
  db.prepare('INSERT INTO users (email, password_hash) VALUES (?, ?)')
    .run('admin@eligoo.in', bcrypt.hashSync(pw, 10));
  fs.writeFileSync(path.join(DATA_DIR, 'admin-initial-password.txt'), pw + '\n', { mode: 0o600 });
  console.log('[seed] admin user created; initial password written to /data/admin-initial-password.txt');
}

const pageCount = db.prepare('SELECT COUNT(*) c FROM pages').get().c;
if (pageCount === 0) {
  const seed = db.prepare('INSERT INTO pages (title, slug, html) VALUES (?, ?, ?)');
  seed.run('Terms & Conditions', 'terms-and-conditions', '<h2>Terms &amp; Conditions</h2><p>Edit this page from the admin panel.</p>');
  seed.run('Privacy Policy', 'privacy-policy', '<h2>Privacy Policy</h2><p>Edit this page from the admin panel.</p>');
}
if (!db.prepare('SELECT 1 FROM settings WHERE key=?').get('social')) {
  db.prepare('INSERT INTO settings (key, value) VALUES (?, ?)')
    .run('social', JSON.stringify({ linkedin: '', x: '', instagram: '', youtube: '', facebook: '' }));
}
export const getSetting = (k) => { const r = db.prepare('SELECT value FROM settings WHERE key=?').get(k); return r ? r.value : null; };
export const setSetting = (k, v) => db.prepare('INSERT INTO settings (key,value) VALUES (?,?) ON CONFLICT(key) DO UPDATE SET value=excluded.value').run(k, v);
