import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, Dodecahedron, Icosahedron, Tetrahedron, MeshDistortMaterial } from "@react-three/drei";
import * as THREE from "three";

function FloatingDodecahedron() {
  return (
    <Float speed={2} rotationIntensity={1} floatIntensity={2}>
      <Dodecahedron args={[0.8]} position={[-3, 2, -5]}>
        <MeshDistortMaterial
          color="#9b59ff"
          attach="material"
          distort={0.5}
          speed={1.5}
          roughness={0.1}
          metalness={0.9}
          transparent
          opacity={0.7}
        />
      </Dodecahedron>
    </Float>
  );
}

function FloatingIcosahedron() {
  return (
    <Float speed={1.5} rotationIntensity={1.5} floatIntensity={1.5}>
      <Icosahedron args={[0.9]} position={[3, -2, -4]}>
        <MeshDistortMaterial
          color="#00bfff"
          attach="material"
          distort={0.4}
          speed={2}
          roughness={0.15}
          metalness={0.85}
          transparent
          opacity={0.75}
        />
      </Icosahedron>
    </Float>
  );
}

function FloatingTetrahedron() {
  return (
    <Float speed={2.5} rotationIntensity={2} floatIntensity={2.5}>
      <Tetrahedron args={[1]} position={[0, 3, -6]}>
        <MeshDistortMaterial
          color="#ff59b9"
          attach="material"
          distort={0.3}
          speed={1.8}
          roughness={0.2}
          metalness={0.8}
          transparent
          opacity={0.65}
        />
      </Tetrahedron>
    </Float>
  );
}

function RotatingTorus() {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (!meshRef.current) return;
    meshRef.current.rotation.x = state.clock.getElapsedTime() * 0.3;
    meshRef.current.rotation.y = state.clock.getElapsedTime() * 0.5;
  });

  return (
    <mesh ref={meshRef} position={[-2, -3, -5]}>
      <torusKnotGeometry args={[0.6, 0.2, 100, 16]} />
      <meshStandardMaterial
        color="#9b59ff"
        roughness={0.1}
        metalness={0.9}
        emissive="#9b59ff"
        emissiveIntensity={0.3}
        transparent
        opacity={0.8}
      />
    </mesh>
  );
}

function PulsingSphere() {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (!meshRef.current) return;
    const scale = 1 + Math.sin(state.clock.getElapsedTime() * 2) * 0.2;
    meshRef.current.scale.set(scale, scale, scale);
  });

  return (
    <mesh ref={meshRef} position={[2, 1, -7]}>
      <sphereGeometry args={[0.7, 32, 32]} />
      <meshStandardMaterial
        color="#00bfff"
        roughness={0.2}
        metalness={0.8}
        emissive="#00bfff"
        emissiveIntensity={0.4}
        transparent
        opacity={0.7}
      />
    </mesh>
  );
}

export const Floating3DModels = () => {
  return (
    <div className="fixed inset-0 pointer-events-none z-[3]">
      <Canvas
        camera={{ position: [0, 0, 8], fov: 45 }}
      >
        <ambientLight intensity={0.3} />
        <pointLight position={[10, 10, 10]} intensity={0.8} />
        <pointLight position={[-10, -10, -10]} intensity={0.5} color="#00bfff" />
        <spotLight position={[0, 10, 0]} intensity={0.6} angle={0.5} penumbra={1} color="#9b59ff" />
        
        <FloatingDodecahedron />
        <FloatingIcosahedron />
        <FloatingTetrahedron />
        <RotatingTorus />
        <PulsingSphere />
      </Canvas>
    </div>
  );
};
