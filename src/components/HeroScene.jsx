import { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, Sphere, Torus, Box, Octahedron } from '@react-three/drei';
import * as THREE from 'three';

function FloatingShape({ position, geometry, color, speed = 1 }) {
  const meshRef = useRef();

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.15 * speed;
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.2 * speed;
    }
  });

  return (
    <Float speed={speed} rotationIntensity={0.4} floatIntensity={1.2}>
      <mesh ref={meshRef} position={position}>
        {geometry}
        <meshStandardMaterial
          color={color}
          roughness={0.2}
          metalness={0.6}
          emissive={color}
          emissiveIntensity={0.15}
        />
      </mesh>
    </Float>
  );
}

function Particles({ count = 200 }) {
  const pointsRef = useRef();

  const positions = useMemo(() => {
    const pos = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 12;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 12;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 12;
    }
    return pos;
  }, [count]);

  useFrame((state) => {
    if (pointsRef.current) {
      pointsRef.current.rotation.y = state.clock.elapsedTime * 0.02;
    }
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={count}
          array={positions}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.03}
        color="#6366f1"
        transparent
        opacity={0.6}
        sizeAttenuation
      />
    </points>
  );
}

function CameraRig() {
  useFrame((state) => {
    const x = (state.pointer.x * 0.4);
    const y = (state.pointer.y * 0.2);
    state.camera.position.x += (x - state.camera.position.x) * 0.02;
    state.camera.position.y += (y - state.camera.position.y) * 0.02;
    state.camera.lookAt(0, 0, 0);
  });
  return null;
}

function Scene() {
  return (
    <>
      <ambientLight intensity={0.5} />
      <pointLight position={[5, 5, 5]} intensity={1} color="#6366f1" />
      <pointLight position={[-5, -3, -5]} intensity={0.6} color="#22d3ee" />

      <FloatingShape
        position={[2.2, 0.5, 0]}
        geometry={<octahedronGeometry args={[0.7, 0]} />}
        color="#6366f1"
        speed={0.8}
      />
      <FloatingShape
        position={[-2.3, -0.6, -1]}
        geometry={<torusGeometry args={[0.5, 0.18, 16, 32]} />}
        color="#22d3ee"
        speed={1.1}
      />
      <FloatingShape
        position={[0.5, 1.3, -1.5]}
        geometry={<boxGeometry args={[0.6, 0.6, 0.6]} />}
        color="#a78bfa"
        speed={0.9}
      />
      <FloatingShape
        position={[-1.2, 1.4, 0.5]}
        geometry={<sphereGeometry args={[0.4, 32, 32]} />}
        color="#22d3ee"
        speed={1.3}
      />

      <Particles count={200} />
      <CameraRig />
    </>
  );
}

function HeroScene() {
  return (
    <Canvas
      camera={{ position: [0, 0, 6], fov: 45 }}
      dpr={[1, 1.5]}
      gl={{ antialias: true, alpha: true }}
    >
      <Scene />
    </Canvas>
  );
}

export default HeroScene;