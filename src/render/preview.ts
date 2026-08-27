// Dev-only: previews each optimized employee model, auto-framed, front view.
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { DRACOLoader } from 'three/examples/jsm/loaders/DRACOLoader.js';

const W = 640, H = 960;
const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true, preserveDrawingBuffer: true });
renderer.setSize(W, H); renderer.outputColorSpace = THREE.SRGBColorSpace;
renderer.toneMapping = THREE.ACESFilmicToneMapping;
document.body.appendChild(renderer.domElement);
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(30, W / H, 0.01, 100);
scene.add(new THREE.AmbientLight(0xffffff, 1.1));
const key = new THREE.DirectionalLight(0xffffff, 2.4); key.position.set(2, 4, 5); scene.add(key);
const rim = new THREE.DirectionalLight(0xff5a36, 1.5); rim.position.set(-4, 2, -3); scene.add(rim);

const draco = new DRACOLoader().setDecoderPath('https://www.gstatic.com/draco/versioned/decoders/1.5.7/');
const loader = new GLTFLoader().setDRACOLoader(draco);
let current: THREE.Group | null = null;

(window as unknown as { renderModel: (name: string, yaw: number) => Promise<string> }).renderModel = (name, yaw) =>
  new Promise((resolve) => {
    if (current) scene.remove(current);
    loader.load(`/models/${name}.glb`, (g) => {
      const obj = g.scene;
      const box = new THREE.Box3().setFromObject(obj);
      const size = box.getSize(new THREE.Vector3());
      const s = 2 / size.y;
      obj.scale.setScalar(s);
      const b2 = new THREE.Box3().setFromObject(obj);
      const c = b2.getCenter(new THREE.Vector3());
      obj.position.sub(c);
      const wrap = new THREE.Group(); wrap.add(obj); wrap.rotation.y = yaw;
      current = wrap; scene.add(wrap);
      camera.position.set(0, 0.25, 4.4); camera.lookAt(0, 0, 0);
      renderer.render(scene, camera);
      resolve(renderer.domElement.toDataURL('image/webp', 0.85));
    });
  });
(window as unknown as { __ready: boolean }).__ready = true;
