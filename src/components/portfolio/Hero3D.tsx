import { Canvas, useFrame } from "@react-three/fiber";
import { Float, OrbitControls, Icosahedron, MeshDistortMaterial } from "@react-three/drei";
import { Suspense, useRef } from "react";
import * as THREE from "three";

const FloatingShape = ({ position, color, scale = 1 }: { position: [number, number, number]; color: string; scale?: number }) => {
  const ref = useRef<THREE.Mesh>(null);
  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.x = state.clock.elapsedTime * 0.3;
      ref.current.rotation.y = state.clock.elapsedTime * 0.4;
    }
  });
  return (
    <Float speed={2} rotationIntensity={1} floatIntensity={2}>
      <mesh ref={ref} position={position} scale={scale}>
        <icosahedronGeometry args={[1, 1]} />
        <meshStandardMaterial color={color} wireframe emissive={color} emissiveIntensity={0.5} />
      </mesh>
    </Float>
  );
};

const CenterOrb = () => {
  const ref = useRef<THREE.Mesh>(null);
  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.y = state.clock.elapsedTime * 0.2;
      ref.current.rotation.x = state.clock.elapsedTime * 0.1;
    }
  });
  return (
    <Float speed={1.5} rotationIntensity={0.5} floatIntensity={1.5}>
      <Icosahedron ref={ref} args={[1.6, 4]}>
        <MeshDistortMaterial color="#3b82f6" emissive="#a855f7" emissiveIntensity={0.4} distort={0.4} speed={2} roughness={0.2} metalness={0.8} />
      </Icosahedron>
    </Float>
  );
};

const Hero3D = () => {
  return (
    <Canvas camera={{ position: [0, 0, 6], fov: 50 }} dpr={[1, 2]}>
      <Suspense fallback={null}>
        <ambientLight intensity={0.4} />
        <pointLight position={[10, 10, 10]} intensity={1.5} color="#3b82f6" />
        <pointLight position={[-10, -10, -5]} intensity={1} color="#a855f7" />
        <pointLight position={[0, 5, 5]} intensity={0.8} color="#22d3ee" />

        <CenterOrb />
        <FloatingShape position={[-3.5, 1.5, -1]} color="#22d3ee" scale={0.4} />
        <FloatingShape position={[3.2, 1.8, -2]} color="#a855f7" scale={0.5} />
        <FloatingShape position={[-3, -1.8, 0]} color="#ec4899" scale={0.35} />
        <FloatingShape position={[3.5, -1.5, -1]} color="#3b82f6" scale={0.45} />
        <FloatingShape position={[0, 2.8, -3]} color="#22d3ee" scale={0.3} />
        <FloatingShape position={[0, -2.8, -2]} color="#a855f7" scale={0.35} />

        <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={0.5} />
      </Suspense>
    </Canvas>
  );
};

export default Hero3D;
