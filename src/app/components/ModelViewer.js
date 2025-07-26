'use client';

// Chakra UI and 3D imports
import { Box } from '@chakra-ui/react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';
import { useRef, useState } from 'react';
import React from 'react';
import { usePathname } from 'next/navigation'; // Add this import

// Helper to detect mobile devices
function useIsMobile() {
  if (typeof window === "undefined") return false;
  return window.innerWidth <= 768;
}

// 3D Model component with spring scale animation and optional spinning
function MyModel({ modelPath, spin, resetSpinSignal }) {
  const gltf = useGLTF(modelPath); // Load GLTF model
  const ref = useRef();            // Reference to the model
  const targetScale = 0.6;         // Final scale value
  const [scale, setScale] = useState(0.01); // Initial scale (starts small)
  const velocity = useRef(0);      // Spring velocity

  // Track spin angle
  const spinAngle = useRef(0);

  // Reset spin when resetSpinSignal changes
  React.useEffect(() => {
    if (ref.current) {
      ref.current.rotation.y = 0;
      spinAngle.current = 0;
    }
  }, [resetSpinSignal]);

  // Animate scale with spring physics
  useFrame((state, delta) => {
    // Animate scale
    const stiffness = 180; // Spring stiffness
    const damping = 12;    // Spring damping
    const force = -stiffness * (scale - targetScale); // Spring force
    velocity.current += force * delta;                // Update velocity
    velocity.current *= Math.exp(-damping * delta);   // Apply damping
    const nextScale = scale + velocity.current * delta; // Next scale value
    setScale(nextScale > 0.001 ? nextScale : 0.001); // Prevent scale from going too low

    // Apply scale and spin
    if (ref.current) {
      ref.current.scale.set(scale, scale, scale);
      if (spin) {
        spinAngle.current += delta * 0.5;
        ref.current.rotation.y = spinAngle.current;
      }
    }
  });

  // Enable shadow casting for all meshes in the model
  React.useEffect(() => {
    if (ref.current) {
      ref.current.traverse((child) => {
        if (child.isMesh) {
          child.castShadow = true;
          child.receiveShadow = false;
        }
      });
    }
  }, [gltf]);

  // Render the loaded model
  return <primitive object={gltf.scene} ref={ref} />;
}

// Main ModelViewer component
export default function ModelViewer({ modelPath, shadowHeight = -1 }) {
  // Detect mobile mode (runs only on client)
  const [isMobile, setIsMobile] = useState(false);
  const pathname = usePathname(); // Get current route

  React.useEffect(() => {
    const check = () => setIsMobile(window.innerWidth <= 768);
    check();
    window.addEventListener('resize', check);
    return () => window.removeEventListener('resize', check);
  }, []);

  return (
    <Box w="100%" h="400px" mx="auto" mb={-8} mt={8}>
      <Canvas shadows camera={{ position: [0, 0, 5], zoom: 2 }}>
        {/* Lighting for the scene */}
        <ambientLight intensity={0.5} />
        <directionalLight
          position={[10, 10, 10]} // Change this to set the shadow angle
          intensity={2}
          castShadow
          shadow-mapSize-width={2048}
          shadow-mapSize-height={2048}
          shadow-bias={-0.0005}
        />
        {/* Shadow receiving plane */}
        <mesh
        >
          <planeGeometry args={[10, 10]} />
          <shadowMaterial opacity={0.5} />
        </mesh>
        {/* Render the animated model, spin on all devices */}
        <MyModel modelPath={modelPath} spin={true} resetSpinSignal={pathname} />
        {/* Controls for rotating the model (still enabled on desktop) */}
        {!isMobile && (
          <OrbitControls enablePan={false} enableZoom={false} />
        )}
      </Canvas>
    </Box>
  );
}
