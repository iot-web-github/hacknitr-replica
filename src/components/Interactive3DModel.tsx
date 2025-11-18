import { useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, PerspectiveCamera, Environment, ContactShadows } from "@react-three/drei";
import * as THREE from "three";

function HackathonTrophy() {
  const groupRef = useRef<THREE.Group>(null);
  const [hovered, setHovered] = useState(false);

  useFrame((state) => {
    if (!groupRef.current) return;
    groupRef.current.rotation.y = state.clock.getElapsedTime() * 0.3;
    if (hovered) {
      groupRef.current.position.y = Math.sin(state.clock.getElapsedTime() * 3) * 0.1;
    }
  });

  return (
    <group 
      ref={groupRef}
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
    >
      {/* Base */}
      <mesh position={[0, -1.5, 0]}>
        <cylinderGeometry args={[0.8, 1, 0.3, 32]} />
        <meshStandardMaterial
          color="#1a1a1a"
          roughness={0.2}
          metalness={0.9}
        />
      </mesh>

      {/* Stand */}
      <mesh position={[0, -1, 0]}>
        <cylinderGeometry args={[0.3, 0.5, 0.8, 32]} />
        <meshStandardMaterial
          color="#ffd700"
          roughness={0.1}
          metalness={1}
          emissive="#ffd700"
          emissiveIntensity={0.2}
        />
      </mesh>

      {/* Cup */}
      <mesh position={[0, 0, 0]}>
        <cylinderGeometry args={[0.6, 0.4, 1.5, 32]} />
        <meshStandardMaterial
          color="#ffd700"
          roughness={0.1}
          metalness={1}
          emissive="#ffd700"
          emissiveIntensity={0.3}
        />
      </mesh>

      {/* Handles */}
      <mesh position={[0.7, 0, 0]} rotation={[0, 0, Math.PI / 2]}>
        <torusGeometry args={[0.3, 0.05, 16, 32, Math.PI]} />
        <meshStandardMaterial
          color="#ffd700"
          roughness={0.1}
          metalness={1}
        />
      </mesh>
      <mesh position={[-0.7, 0, 0]} rotation={[0, 0, -Math.PI / 2]}>
        <torusGeometry args={[0.3, 0.05, 16, 32, Math.PI]} />
        <meshStandardMaterial
          color="#ffd700"
          roughness={0.1}
          metalness={1}
        />
      </mesh>

      {/* Top sphere */}
      <mesh position={[0, 1, 0]}>
        <sphereGeometry args={[0.2, 32, 32]} />
        <meshStandardMaterial
          color="#9b59ff"
          roughness={0}
          metalness={1}
          emissive="#9b59ff"
          emissiveIntensity={0.5}
        />
      </mesh>

      {/* Decorative ring */}
      <mesh position={[0, 0.5, 0]}>
        <torusGeometry args={[0.5, 0.03, 16, 100]} />
        <meshStandardMaterial
          color="#00bfff"
          roughness={0}
          metalness={1}
          emissive="#00bfff"
          emissiveIntensity={0.4}
        />
      </mesh>
    </group>
  );
}

function CodeCube() {
  const meshRef = useRef<THREE.Mesh>(null);
  const [hovered, setHovered] = useState(false);

  useFrame((state) => {
    if (!meshRef.current) return;
    meshRef.current.rotation.x = state.clock.getElapsedTime() * 0.4;
    meshRef.current.rotation.y = state.clock.getElapsedTime() * 0.5;
    const scale = hovered ? 1.2 : 1;
    meshRef.current.scale.lerp(new THREE.Vector3(scale, scale, scale), 0.1);
  });

  return (
    <mesh
      ref={meshRef}
      position={[3, 0, 0]}
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
    >
      <boxGeometry args={[1.5, 1.5, 1.5]} />
      <meshStandardMaterial
        color="#9b59ff"
        roughness={0.2}
        metalness={0.8}
        emissive="#9b59ff"
        emissiveIntensity={hovered ? 0.5 : 0.2}
        wireframe={hovered}
      />
    </mesh>
  );
}

export const Interactive3DModel = () => {
  return (
    <div className="w-full h-[500px] relative pointer-events-auto">
      <Canvas>
        <PerspectiveCamera makeDefault position={[0, 2, 8]} />
        
        <ambientLight intensity={0.4} />
        <pointLight position={[10, 10, 10]} intensity={1} />
        <pointLight position={[-10, -10, -10]} intensity={0.5} color="#00bfff" />
        <spotLight 
          position={[0, 10, 0]} 
          intensity={1.5} 
          angle={0.5} 
          penumbra={1} 
          color="#9b59ff"
          castShadow
        />
        
        <HackathonTrophy />
        <CodeCube />
        
        <ContactShadows
          position={[0, -2, 0]}
          opacity={0.5}
          scale={10}
          blur={2}
          far={4}
        />
        
        <Environment preset="city" />
        
        <OrbitControls 
          enableZoom={true}
          enablePan={false}
          minDistance={5}
          maxDistance={15}
          autoRotate
          autoRotateSpeed={0.5}
        />
      </Canvas>
      
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-center pointer-events-none">
        <p className="text-sm text-muted-foreground bg-background/80 backdrop-blur px-4 py-2 rounded-full border border-border">
          Drag to rotate • Scroll to zoom
        </p>
      </div>
    </div>
  );
};
