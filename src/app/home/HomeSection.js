'use client';

import { Box, Heading } from '@chakra-ui/react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, useGLTF, useTexture } from '@react-three/drei';
import ModelViewer from '../components/ModelViewer';


export default function HomeSection() {
  return (
    <Box as="section" id="home" py={20} textAlign="center">
      <ModelViewer modelPath="/models/joystick.glb" />
      <Heading as="h1" size="2xl" mb={8}>
        Welcome to My Website
      </Heading>
      <p mb={8}>
        I am a lover of games and tinkerer of all sorts.
      </p>
    </Box>
  );
}