import { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Html } from '@react-three/drei';
import { orbitSkills } from '../data/orbitSkills';

function fibonacciSphere(count, radius) {
  const points = [];
  const goldenAngle = Math.PI * (3 - Math.sqrt(5));
  for (let i = 0; i < count; i++) {
    const y = 1 - (i / (count - 1)) * 2;
    const r = Math.sqrt(1 - y * y);
    const theta = goldenAngle * i;
    points.push([
      Math.cos(theta) * r * radius,
      y * radius,
      Math.sin(theta) * r * radius,
    ]);
  }
  return points;
}

function OrbitLabel({ position, text }) {
  return (
    <Html position={position} center transform sprite occlude={false}>
      <div className="orbit-label">{text}</div>
    </Html>
  );
}

function OrbitGroup() {
  const groupRef = useRef();
  const positions = useMemo(() => fibonacciSphere(orbitSkills.length, 2.4), []);

  useFrame((state, delta) => {
    if (groupRef.current) {
      groupRef.current.rotation.y += delta * 0.15;
    }
  });

  return (
    <group ref={groupRef}>
      {orbitSkills.map((skill, i) => (
        <OrbitLabel key={skill} position={positions[i]} text={skill} />
      ))}
      <mesh>
        <sphereGeometry args={[1.1, 32, 32]} />
        <meshStandardMaterial
          color="#6366f1"
          roughness={0.3}
          metalness={0.5}
          emissive="#6366f1"
          emissiveIntensity={0.2}
          transparent
          opacity={0.25}
          wireframe
        />
      </mesh>
    </group>
  );
}

function SkillsOrbit() {
  return (
    <Canvas
      camera={{ position: [0, 0, 6.5], fov: 45 }}
      dpr={[1, 1.5]}
      gl={{ antialias: true, alpha: true }}
    >
      <ambientLight intensity={0.6} />
      <pointLight position={[5, 5, 5]} intensity={1} color="#6366f1" />
      <pointLight position={[-5, -3, -5]} intensity={0.5} color="#22d3ee" />
      <OrbitGroup />
    </Canvas>
  );
}

export default SkillsOrbit;