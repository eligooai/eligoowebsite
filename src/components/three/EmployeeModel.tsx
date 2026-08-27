import { useMemo, useRef } from 'react';
import * as THREE from 'three';
import { useFrame } from '@react-three/fiber';
import { useGLTF } from '@react-three/drei';
import { EMPLOYEES } from '../../data/employees';

/** Normalized clone of an employee model: height 1, feet at y=0, centered. */
export function useEmployeeScene(url: string) {
  const { scene } = useGLTF(url);
  return useMemo(() => {
    const clone = scene.clone(true);
    const box = new THREE.Box3().setFromObject(clone);
    const size = box.getSize(new THREE.Vector3());
    const s = 1 / size.y;
    clone.scale.setScalar(s);
    const b2 = new THREE.Box3().setFromObject(clone);
    clone.position.set(-(b2.min.x + b2.max.x) / 2, -b2.min.y, -(b2.min.z + b2.max.z) / 2);
    const wrap = new THREE.Group();
    wrap.add(clone);
    return wrap;
  }, [scene]);
}

interface Props {
  url: string;
  height?: number;
  /** procedural idle: bob + sway */
  idle?: boolean;
  /** rad of yaw toward the pointer (0 = off) */
  followPointer?: number;
  /** continuous turntable speed (rad/s) */
  spin?: number;
  offset?: number;
}

export default function EmployeeModel({ url, height = 1, idle = true, followPointer = 0, spin = 0, offset = 0 }: Props) {
  const scene = useEmployeeScene(url);
  const g = useRef<THREE.Group>(null);
  const inner = useRef<THREE.Group>(null);
  useFrame((state, delta) => {
    const t = state.clock.elapsedTime + offset;
    if (!g.current || !inner.current) return;
    if (idle) {
      g.current.position.y = (Math.sin(t * 1.5) * 0.012 + 0.006) * height;
      inner.current.rotation.z = Math.sin(t * 0.7) * 0.02;
    }
    if (spin) inner.current.rotation.y += delta * spin;
    else if (followPointer) {
      inner.current.rotation.y = THREE.MathUtils.damp(inner.current.rotation.y, state.pointer.x * followPointer, 4, delta);
      inner.current.rotation.x = THREE.MathUtils.damp(inner.current.rotation.x, -state.pointer.y * followPointer * 0.25, 4, delta);
    }
  });
  return (
    <group ref={g} scale={height}>
      <group ref={inner}>
        <primitive object={scene} />
      </group>
    </group>
  );
}

EMPLOYEES.forEach((e) => useGLTF.preload(e.model));
