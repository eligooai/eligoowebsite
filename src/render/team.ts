// Dev-only offline renderer: the seven robot employees filmed in 3D —
// push-in, glide past with ID cards, card grid, closing team photo.
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { DRACOLoader } from 'three/examples/jsm/loaders/DRACOLoader.js';

const PORTRAIT = new URLSearchParams(location.search).has('portrait');
const W = PORTRAIT ? 1152 : 2048, H = PORTRAIT ? 2048 : 1152;
const ZK = PORTRAIT ? 1.75 : 1;
const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true, preserveDrawingBuffer: true });
renderer.setSize(W, H); renderer.setPixelRatio(1);
renderer.outputColorSpace = THREE.SRGBColorSpace;
renderer.toneMapping = THREE.ACESFilmicToneMapping;
document.body.appendChild(renderer.domElement);
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(36, W / H, 0.1, 200);

scene.add(new THREE.AmbientLight(0xffffff, 1.0));
const key = new THREE.DirectionalLight(0xffffff, 2.6); key.position.set(3, 7, 6); scene.add(key);
const rim = new THREE.DirectionalLight(0xff5a36, 1.6); rim.position.set(-6, 3, -4); scene.add(rim);

const sm = (a: number, b: number, t: number) => { const x = Math.min(1, Math.max(0, (t - a) / (b - a))); return x * x * (3 - 2 * x); };
const io = (a: number, b: number, t: number) => { const x = Math.min(1, Math.max(0, (t - a) / (b - a))); return x < 0.5 ? 4 * x * x * x : 1 - Math.pow(-2 * x + 2, 3) / 2; };
const lerp = THREE.MathUtils.lerp;

interface Member { id: string; name: string; role: string; x: number; z: number; h: number; grid: [number, number]; }
const TEAM: Member[] = [
  { id: 'pixel', name: 'Pixel', role: 'Creative Production Agent', x: -6.4, z: -2.9, h: 3.0, grid: [-1.5, 1] },
  { id: 'maven', name: 'Maven', role: 'Market, Brand & Campaign Strategist', x: -4.2, z: -1.4, h: 3.1, grid: [-0.5, 1] },
  { id: 'sage', name: 'Sage', role: 'Content & Organic Growth Manager', x: -2.1, z: -0.4, h: 3.15, grid: [0.5, 1] },
  { id: 'atlas', name: 'Atlas', role: 'AI Growth Operations Manager', x: 0, z: 0.15, h: 3.45, grid: [1.5, 1] },
  { id: 'radar', name: 'Radar', role: 'Prospect Intelligence Agent', x: 2.1, z: -0.4, h: 3.1, grid: [-1, -1] },
  { id: 'hook', name: 'Hook', role: 'Outbound & Meeting Agent', x: 4.2, z: -1.4, h: 3.05, grid: [0, -1] },
  { id: 'ledger', name: 'Ledger', role: 'CRM & Revenue Intelligence Analyst', x: 6.4, z: -2.9, h: 3.0, grid: [1, -1] },
];

function shadowTex() {
  const c = document.createElement('canvas'); c.width = c.height = 256;
  const g = c.getContext('2d')!; const r = g.createRadialGradient(128, 128, 10, 128, 128, 128);
  r.addColorStop(0, 'rgba(0,0,0,0.5)'); r.addColorStop(1, 'rgba(0,0,0,0)'); g.fillStyle = r; g.fillRect(0, 0, 256, 256);
  return new THREE.CanvasTexture(c);
}
function floorTex() {
  const c = document.createElement('canvas'); c.width = c.height = 1024;
  const g = c.getContext('2d')!; const r = g.createRadialGradient(512, 512, 60, 512, 512, 512);
  r.addColorStop(0, 'rgba(8,40,34,0.95)'); r.addColorStop(0.55, 'rgba(6,30,26,0.7)'); r.addColorStop(1, 'rgba(4,26,23,0)');
  g.fillStyle = r; g.fillRect(0, 0, 1024, 1024);
  return new THREE.CanvasTexture(c);
}
function glowTex() {
  const c = document.createElement('canvas'); c.width = c.height = 512;
  const g = c.getContext('2d')!; const r = g.createRadialGradient(256, 256, 0, 256, 256, 256);
  r.addColorStop(0, 'rgba(255,90,54,0.5)'); r.addColorStop(0.5, 'rgba(255,90,54,0.12)'); r.addColorStop(1, 'rgba(255,90,54,0)');
  g.fillStyle = r; g.fillRect(0, 0, 512, 512);
  return new THREE.CanvasTexture(c);
}
function roundRect(g: CanvasRenderingContext2D, x: number, y: number, w: number, h: number, r: number) {
  g.beginPath(); g.moveTo(x + r, y); g.arcTo(x + w, y, x + w, y + h, r); g.arcTo(x + w, y + h, x, y + h, r); g.arcTo(x, y + h, x, y, r); g.arcTo(x, y, x + w, y, r); g.closePath();
}
function cardTex(m: Member, mark: HTMLImageElement, idx: number) {
  const SS = 4;
  const c = document.createElement('canvas'); c.width = 640 * SS; c.height = 400 * SS;
  const g = c.getContext('2d')!;
  g.scale(SS, SS);
  g.clearRect(0, 0, 640, 400);
  // card
  g.fillStyle = '#ffffff'; roundRect(g, 10, 10, 620, 380, 40); g.fill();
  g.strokeStyle = '#E4EAE7'; g.lineWidth = 2; roundRect(g, 11, 11, 618, 378, 39); g.stroke();
  // status pill
  g.fillStyle = '#041A17'; roundRect(g, 44, 42, 198, 42, 21); g.fill();
  g.fillStyle = '#FF5A36'; g.beginPath(); g.arc(68, 63, 6, 0, Math.PI * 2); g.fill();
  g.fillStyle = '#ffffff'; g.font = '700 17px Inter'; g.textBaseline = 'middle'; g.fillText('WFC · ONLINE', 84, 64);
  // employee number
  g.fillStyle = '#9AA8A4'; g.font = '700 17px Inter'; g.textAlign = 'right';
  g.fillText(`EMP-00${idx + 1}`, 596, 64); g.textAlign = 'left';
  // name
  g.fillStyle = '#041A17'; g.font = '900 76px Nunito'; g.textBaseline = 'alphabetic'; g.fillText(m.name, 44, 190);
  // role — wrap to two lines when long
  g.fillStyle = '#FF5A36'; g.font = '600 25px Inter';
  const words = m.role.split(' ');
  let line = ''; let ry = 236; const lines: string[] = [];
  for (const w of words) {
    const test = line ? line + ' ' + w : w;
    if (g.measureText(test).width > 540 && line) { lines.push(line); line = w; } else line = test;
  }
  lines.push(line);
  for (const l of lines.slice(0, 2)) { g.fillText(l, 45, ry); ry += 32; }
  // footer
  g.fillStyle = '#E4EAE7'; g.fillRect(44, 306, 552, 2);
  g.fillStyle = '#8A9793'; g.font = '600 18px Inter'; g.fillText('AI EMPLOYEE · ELIGOO', 44, 352);
  const mw = 96, mh = mw * (641 / 1191); g.drawImage(mark, 596 - mw, 364 - mh, mw, mh);
  const t = new THREE.CanvasTexture(c); t.colorSpace = THREE.SRGBColorSpace; t.anisotropy = 16; return t;
}

const chars: { g: THREE.Group; m: Member }[] = [];
const cards: { mesh: THREE.Mesh; mat: THREE.MeshBasicMaterial; m: Member }[] = [];
let glow: THREE.Mesh;

const draco = new DRACOLoader().setDecoderPath('https://www.gstatic.com/draco/versioned/decoders/1.5.7/');
const gltf = new GLTFLoader().setDRACOLoader(draco);
const loadModel = (url: string) => new Promise<THREE.Group>((res) => gltf.load(url, (g) => res(g.scene as unknown as THREE.Group)));

async function build() {
  await document.fonts.load('900 84px Nunito'); await document.fonts.load('700 19px Inter'); await document.fonts.load('600 26px Inter');
  const markImg = new Image(); markImg.src = '/brand/mark.png'; await markImg.decode();
  const shadow = shadowTex();
  const floor = new THREE.Mesh(new THREE.PlaneGeometry(46, 46), new THREE.MeshBasicMaterial({ map: floorTex(), transparent: true, depthWrite: false }));
  floor.rotation.x = -Math.PI / 2; floor.position.set(0, -0.01, -3); scene.add(floor);
  glow = new THREE.Mesh(new THREE.PlaneGeometry(24, 24), new THREE.MeshBasicMaterial({ map: glowTex(), transparent: true, depthWrite: false }));
  glow.rotation.x = -Math.PI / 2; glow.position.set(0, 0.005, -1.5); scene.add(glow);

  for (const m of TEAM) {
    const model = await loadModel(`/models/${m.id}.glb`);
    const box = new THREE.Box3().setFromObject(model);
    const size = box.getSize(new THREE.Vector3());
    const s = m.h / size.y;
    model.scale.setScalar(s);
    const b2 = new THREE.Box3().setFromObject(model);
    model.position.set(-(b2.min.x + b2.max.x) / 2, -b2.min.y, -(b2.min.z + b2.max.z) / 2);
    const g = new THREE.Group(); g.add(model); g.position.set(m.x, 0, m.z); scene.add(g);
    const sh = new THREE.Mesh(new THREE.PlaneGeometry(m.h * 0.7, m.h * 0.3), new THREE.MeshBasicMaterial({ map: shadow, transparent: true, depthWrite: false }));
    sh.rotation.x = -Math.PI / 2; sh.position.y = 0.02; g.add(sh);
    chars.push({ g, m });
    const cmat = new THREE.MeshBasicMaterial({ map: cardTex(m, markImg, TEAM.indexOf(m)), transparent: true, depthWrite: false });
    const card = new THREE.Mesh(new THREE.PlaneGeometry(2.4, 1.5), cmat); card.visible = false; scene.add(card);
    cards.push({ mesh: card, mat: cmat, m });
  }
  (window as unknown as { __ready: boolean }).__ready = true;
}
build();

const look = new THREE.Vector3();
function setFrame(t: number) {
  const a1 = sm(0, 0.24, t), a2 = io(0.24, 0.58, t), a3 = io(0.58, 0.82, t), a4 = io(0.82, 1, t);
  let cx = lerp(-1.2, 0, a1), cy = lerp(3.2, 3.0, a1), cz = lerp(12.5, 11, a1);
  cx = lerp(cx, lerp(-6, 6, a2), sm(0.2, 0.3, t) * (1 - sm(0.55, 0.66, t)));
  cz = lerp(cz, 10.5, sm(0.2, 0.3, t) * (1 - sm(0.55, 0.66, t)));
  cy = lerp(cy, 2.9, sm(0.2, 0.3, t) * (1 - sm(0.55, 0.66, t)));
  cz = lerp(cz, 14.5, sm(0.55, 0.7, t)); cx = lerp(cx, 0, sm(0.55, 0.7, t));
  cy = lerp(cy, 2.6, sm(0.55, 0.7, t)); cy = lerp(cy, 2.8, a4); cz = lerp(cz, 12.6, a4);
  camera.position.set(cx * (PORTRAIT ? 0.8 : 1), cy + (PORTRAIT ? 0.6 : 0), cz * ZK);
  const ly = lerp(lerp(4.3, 4.0, a1), 2.7, sm(0.2, 0.3, t));
  look.set(lerp(cx * 0.6, 0, sm(0.55, 0.7, t)), lerp(lerp(ly, 3.3, a3), 4.6, a4), lerp(0, -1.5, a4));
  if (PORTRAIT) look.y += lerp(1.5, 0, sm(0.2, 0.3, t));
  camera.lookAt(look);

  chars.forEach((c, i) => {
    // step back while the cards take the stage, forward again for the team photo
    c.g.position.z = lerp(lerp(c.m.z, c.m.z - 4, a3), c.m.z + 1.2, a4);
    c.g.position.x = lerp(c.m.x, c.m.x * 0.88, a4);
    c.g.position.y = Math.sin(t * 14 + i) * 0.035;
    // robots glance toward the passing camera during the glide
    const toCam = Math.atan2(camera.position.x - c.g.position.x, camera.position.z - c.g.position.z);
    c.g.rotation.y = THREE.MathUtils.clamp(toCam, -0.55, 0.55) * a2 * (1 - a3);
  });
  cards.forEach((c, i) => {
    const at = 0.26 + i * 0.045; const k = io(at, at + 0.07, t);
    const side = c.m.x < 0 ? 1 : -1;
    const restX = c.m.x + side * 0.15, restY = c.m.h + 1.0 + (i % 2) * 0.5, restZ = c.m.z + 0.6;
    const gx = c.m.grid[0] * 2.0, gy = 3.5 + c.m.grid[1] * 0.78, gz = 4.2;
    const ex = c.m.x * 0.88, ey = c.m.h + 0.68 + (i % 2) * 0.38, ez = c.m.z + 1.5;
    let x = lerp(restX, gx, a3), y = lerp(restY, gy, a3), z = lerp(restZ, gz, a3);
    x = lerp(x, ex, a4); y = lerp(y, ey, a4); z = lerp(z, ez, a4);
    c.mesh.position.set(x, y, z);
    c.mesh.visible = k > 0.001;
    const s = lerp(0.6, 0.86, k) * lerp(1, 0.78 / 0.86, a3) * lerp(1, 0.55 / 0.78, a4);
    c.mesh.scale.setScalar(s);
    c.mesh.quaternion.copy(camera.quaternion);
    c.mesh.rotateY(lerp(-Math.PI / 2, 0, k) + side * 0.12 * (1 - a3));
    c.mat.opacity = k;
  });
  (glow.material as THREE.MeshBasicMaterial).opacity = lerp(lerp(0.5, 1, a1) * (1 - a3 * 0.4), 1.2, a4);
  renderer.render(scene, camera);
}
(window as unknown as { renderFrame: (t: number) => string }).renderFrame = (t) => { setFrame(t); return renderer.domElement.toDataURL('image/webp', 0.8); };
