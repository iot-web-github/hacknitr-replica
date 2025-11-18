import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, MeshDistortMaterial, Sphere, Torus, Box, Cone, Octahedron } from "@react-three/drei";
import * as THREE from "three";

function AnimatedSphere() {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (!meshRef.current) return;
    meshRef.current.rotation.x = state.clock.getElapsedTime() * 0.3;
    meshRef.current.rotation.y = state.clock.getElapsedTime() * 0.4;
  });

  return (
    <Sphere ref={meshRef} args={[1, 100, 100]} position={[-2, 0, 0]}>
      <MeshDistortMaterial
        color="#9b59ff"
        attach="material"
        distort={0.4}
        speed={2}
        roughness={0.2}
        metalness={0.8}
      />
    </Sphere>
  );
}

function AnimatedTorus() {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (!meshRef.current) return;
    meshRef.current.rotation.x = state.clock.getElapsedTime() * 0.5;
    meshRef.current.rotation.z = state.clock.getElapsedTime() * 0.3;
  });

  return (
    <Torus ref={meshRef} args={[1, 0.4, 16, 100]} position={[2, 1, 0]}>
      <MeshDistortMaterial
        color="#00bfff"
        attach="material"
        distort={0.3}
        speed={1.5}
        roughness={0.1}
        metalness={0.9}
      />
    </Torus>
  );
}

function AnimatedBox() {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (!meshRef.current) return;
    meshRef.current.rotation.x = state.clock.getElapsedTime() * 0.4;
    meshRef.current.rotation.y = state.clock.getElapsedTime() * 0.6;
    meshRef.current.position.y = Math.sin(state.clock.getElapsedTime()) * 0.3;
  });

  return (
    <Box ref={meshRef} args={[1.2, 1.2, 1.2]} position={[0, -1.5, 0]}>
      <meshStandardMaterial
        color="#9b59ff"
        roughness={0.3}
        metalness={0.7}
        emissive="#9b59ff"
        emissiveIntensity={0.2}
      />
    </Box>
  );
}

function AnimatedCone() {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (!meshRef.current) return;
    meshRef.current.rotation.y = state.clock.getElapsedTime() * 0.7;
    meshRef.current.position.y = Math.cos(state.clock.getElapsedTime() * 0.8) * 0.4;
  });

  return (
    <Cone ref={meshRef} args={[0.8, 1.6, 32]} position={[-2, -1, -2]}>
      <meshStandardMaterial
        color="#00bfff"
        roughness={0.2}
        metalness={0.8}
        emissive="#00bfff"
        emissiveIntensity={0.3}
      />
    </Cone>
  );
}

function AnimatedOctahedron() {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (!meshRef.current) return;
    meshRef.current.rotation.x = state.clock.getElapsedTime() * 0.6;
    meshRef.current.rotation.y = state.clock.getElapsedTime() * 0.4;
    meshRef.current.position.x = Math.sin(state.clock.getElapsedTime() * 0.5) * 0.5;
  });

  return (
    <Octahedron ref={meshRef} args={[1]} position={[2, -1.5, -1]}>
      <meshStandardMaterial
        color="#ff59b9"
        roughness={0.2}
        metalness={0.9}
        emissive="#ff59b9"
        emissiveIntensity={0.25}
      />
    </Octahedron>
  );
}

export const Hero3DScene = () => {
  return (
    <div className="absolute inset-0 pointer-events-auto z-[5]">
      <Canvas
        camera={{ position: [0, 0, 6], fov: 50 }}
        className="pointer-events-auto"
      >
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1} />
        <pointLight position={[-10, -10, -10]} intensity={0.5} color="#00bfff" />
        <spotLight position={[0, 5, 0]} intensity={0.8} angle={0.6} penumbra={1} color="#9b59ff" />
        
        <AnimatedSphere />
        <AnimatedTorus />
        <AnimatedBox />
        <AnimatedCone />
        <AnimatedOctahedron />
        
        <OrbitControls 
          enableZoom={false} 
          enablePan={false}
          autoRotate
          autoRotateSpeed={0.5}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
      </Canvas>
    </div>
  );
};
