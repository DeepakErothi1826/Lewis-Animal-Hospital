import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';
import { Navbar } from './Navbar';
import { Footer } from './Footer';

function ParticleBackground() {
  const ref = useRef();
  
  // Generate random points in a sphere
  const sphere = useMemo(() => {
    const points = new Float32Array(3000);
    for (let i = 0; i < 3000; i++) {
      points[i] = (Math.random() - 0.5) * 15;
    }
    return points;
  }, []);

  useFrame((state, delta) => {
    if (ref.current) {
      ref.current.rotation.x -= delta / 20;
      ref.current.rotation.y -= delta / 30;
    }
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={sphere} stride={3} frustumCulled={false}>
        <PointMaterial
          transparent
          color="#0B6A50"
          size={0.02}
          sizeAttenuation={true}
          depthWrite={false}
          opacity={0.15}
        />
      </Points>
    </group>
  );
}

export function PageWrapper({ children }) {
  return (
    <div className="relative min-h-screen flex flex-col w-full bg-background-cream overflow-hidden">
      {/* 3D Ambient Background */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-40">
        <Canvas camera={{ position: [0, 0, 5] }}>
          <ParticleBackground />
        </Canvas>
      </div>

      <Navbar />
      
      <main className="flex-grow pt-20 relative z-10 w-full">
        {children}
      </main>

      <div className="relative z-10 w-full">
        <Footer />
      </div>
    </div>
  );
}
