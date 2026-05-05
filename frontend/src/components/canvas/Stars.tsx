import { useState, useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';
import * as THREE from 'three';

const Stars = (props: any) => {
  const ref = useRef<THREE.Points>(null!);
  
  const [sphere] = useState(() => {
    const points = new Float32Array(5000 * 3);
    for (let i = 0; i < points.length; i++) {
      points[i] = (Math.random() - 0.5) * 5; // Increased spread
    }
    return points;
  });

  useFrame((_state, delta) => {
    if (ref.current) {
      ref.current.rotation.x -= delta / 10;
      ref.current.rotation.y -= delta / 15;
    }
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={sphere} stride={3} frustumCulled={false} {...props}>
        <PointMaterial
          transparent
          color="#f272c8"
          size={0.005}
          sizeAttenuation={true}
          depthWrite={false}
        />
      </Points>
    </group>
  );
};

const StarsCanvas = () => {
  return (
    <div className="stars-container" style={{ position: 'fixed', inset: 0, zIndex: -1, background: '#0b090a' }}>
      <Canvas camera={{ position: [0, 0, 1] }}>
        <Stars />
      </Canvas>
    </div>
  );
};

export default StarsCanvas;
