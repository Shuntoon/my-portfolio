'use client';

// Chakra UI and 3D imports
import { Box } from '@chakra-ui/react';
import { Canvas, useFrame } from '@react-three/fiber';
import { useGLTF } from '@react-three/drei';
import { useRef, useState } from 'react';
import React from 'react';

// 3D Model component with spring scale animation and oscillating rotation
function MyModel({ modelPath }) {
  const gltf = useGLTF(modelPath);
  const ref = useRef();
  const targetScale = 0.6;
  const [scale, setScale] = useState(0.01);
  const velocity = useRef(0);

  // Oscillation state
  const oscillateRef = useRef(0);

  useFrame((state, delta) => {
    // Animate scale
    const stiffness = 180;
    const damping = 12;
    const force = -stiffness * (scale - targetScale);
    velocity.current += force * delta;
    velocity.current *= Math.exp(-damping * delta);
    const nextScale = scale + velocity.current * delta;
    setScale(nextScale > 0.001 ? nextScale : 0.001);

    // Handle rotation
    if (ref.current) {
      ref.current.scale.set(scale, scale, scale);
      
      // Simple oscillation
      oscillateRef.current += delta;
      ref.current.rotation.y = Math.sin(oscillateRef.current * .75) * 0.35;
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
  return (
    <Box w="100%" h="400px" mx="auto" mb={-8} mt={8}>
      <Canvas shadows camera={{ position: [5, 5, 5], zoom: 2 }}>
        {/* Lighting for the scene */}
        <ambientLight intensity={0.5} />
        <directionalLight
          position={[10, 10, 0]}
          intensity={2}
          castShadow
          shadow-mapSize-width={2048}
          shadow-mapSize-height={2048}
          shadow-bias={-0.0005}
        />
        {/* Shadow receiving plane */}
        <mesh
          receiveShadow
          rotation={[-Math.PI / 2, 0, 0]}
          position={[0, shadowHeight, 0]}
        >
          <planeGeometry args={[10, 10]} />
          <shadowMaterial opacity={0.5} />
        </mesh>
        {/* Model with simple oscillation */}
        <MyModel modelPath={modelPath} />
      </Canvas>
    </Box>
  );
}
