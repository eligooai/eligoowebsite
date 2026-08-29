// Loaded lazily — keeps three.js out of the main bundle; the model itself
// only downloads when a profile is opened.
import { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, ContactShadows } from '@react-three/drei';
import EmployeeModel from './EmployeeModel';

export default function ProfileViewer({ model }: { model: string }) {
  return (
    <Canvas dpr={[1, 2]} camera={{ position: [0, 0.7, 2.6], fov: 32 }} style={{ position: 'absolute', inset: 0 }}>
      <Suspense fallback={null}>
        <ambientLight intensity={1.1} />
        <directionalLight position={[2, 4, 4]} intensity={2.2} />
        <directionalLight position={[-3, 2, -2]} intensity={1.2} color="#FF5A36" />
        <group position={[0, -0.62, 0]}>
          <EmployeeModel url={model} height={1.15} idle />
          <ContactShadows position={[0, 0, 0]} opacity={0.5} scale={3.4} blur={2.2} far={1.4} resolution={256} frames={Infinity} />
        </group>
        <OrbitControls enablePan={false} enableZoom={false} autoRotate autoRotateSpeed={1.4} minPolarAngle={Math.PI / 3} maxPolarAngle={Math.PI / 1.9} target={[0, 0, 0]} />
      </Suspense>
    </Canvas>
  );
}
