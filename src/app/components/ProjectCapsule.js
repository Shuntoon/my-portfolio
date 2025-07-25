'use client';

import { Box, Flex, Heading, Text, Image } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { useRef } from 'react';
import TechCapsule from './TechCapsule';

const MotionBox = motion(Box);

// Color map for technology capsules
const getColorScheme = (techLabel) => {
  const colorMap = {
    react: { bg: '#20232a', border: '#61dafb', text: '#61dafb' },
    'next.js': { bg: '#000', border: '#fff', text: '#fff' },
    'chakra ui': { bg: '#319795', border: '#fff', text: '#fff' },
    typescript: { bg: '#007acc', border: '#fff', text: '#fff' },
    javascript: { bg: '#f7df1e', border: '#323330', text: '#323330' },
    node: { bg: '#3c873a', border: '#fff', text: '#fff' },
    'godot 4': { bg: '#478cbf', border: '#fff', text: '#fff' },
    aseprite: { bg: '#7d929e', border: '#fff', text: '#fff' },
    yellow: { bg: '#f1c40f', border: '#2c3e50', text: '#2c3e50' },
    green: { bg: '#27ae60', border: '#fff', text: '#fff' },
    red: { bg: '#e74c3c', border: '#fff', text: '#fff' },
    'ui/ux design': { bg: '#9b59b6', border: '#fff', text: '#fff' },
    coding: { bg: '#2ecc71', border: '#fff', text: '#fff' },
    youtube: { bg: '#ff0000', border: '#fff', text: '#fff' },
    '3d development': { bg: '#3498db', border: '#fff', text: '#fff' },
    education: { bg: '#16a085', border: '#fff', text: '#fff' },
    blue: { bg: '#4fb1df', border: '#fff', text: '#fff' },
    purple: { bg: '#4c74f5', border: '#fff', text: '#fff' },
  };
  return colorMap[techLabel.toLowerCase()] || colorMap.blue;
};

export default function ProjectCapsule({ title, description, image, technologies, projectLink }) {
  // Shake animation keyframes
  const shakeKeyframes = [
    { transform: 'translateX(0)' },
    { transform: 'translateX(-6px)' },
    { transform: 'translateX(6px)' },
    { transform: 'translateX(-4px)' },
    { transform: 'translateX(4px)' },
    { transform: 'translateX(0)' }
  ];

  return (
    <MotionBox
      borderRadius="xl"
      bg={{ base: "rgba(255, 255, 255, 0.10)", _dark: "rgba(0, 0, 0, 0.10)" }}
      backdropFilter="blur(10px) saturate(180%)"
      border="1px solid"
      borderColor={{ base: "rgba(255, 255, 255, 0.18)", _dark: "rgba(255, 255, 255, 0.08)" }}
      boxShadow="0 4px 30px rgba(0, 0, 0, 0.08)"
      whileHover={{ scale: 1.03 }}
      transition={{ duration: 0.3 }}
      cursor="pointer"
      onClick={() => window.location.href = projectLink}
      width="100%"
      height={{ base: "350px", md: "300px" }}
      overflow="hidden"
      position="relative"
      mb={8}
      sx={{
        '&:hover .project-image': {
          filter: 'brightness(1) contrast(1.05)', // Remove dim on hover
        },
        '&:hover .project-overlay': {
          bg: 'linear-gradient(to top, rgba(0,0,0,0.18) 0%, rgba(0,0,0,0.04) 100%)', // Less overlay on hover
        }
      }}
    >
      {/* Background image with overlay */}
      <Box 
        position="absolute"
        top="0"
        left="0"
        right="0"
        bottom="0"
        zIndex="0"
      >
        <img
          src={image}
          alt={title}
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            filter: 'brightness(0.85) contrast(1.08)',
            transition: 'filter 0.3s',
          }}
          className="project-image"
        />
        <Box 
          position="absolute"
          top="0"
          left="0"
          right="0"
          bottom="0"
          bg="linear-gradient(to top, rgba(0,0,0,0.55) 0%, rgba(0,0,0,0.18) 60%, rgba(0,0,0,0.04) 100%)"
          className="project-overlay"
        />
      </Box>
      
      {/* Content positioned at the bottom */}
      <Box 
        position="absolute"
        bottom="0"
        left="0"
        right="0"
        p={{ base: 6, md: 4 }}
        zIndex="1"
      >
        <Heading 
          size={{ base: "lg", md: "md" }}
          mb={3}
          color="#fff"
          fontWeight="600"
          textShadow="0 1px 2px rgba(0,0,0,0.18)"
        >
          {title}
        </Heading>
        <Text 
          fontSize={{ base: "sm", md: "xs" }}
          mb={4}
          color="#fff"
          noOfLines={3}
          textShadow="0 1px 2px rgba(0,0,0,0.18)"
        >
          {description}
        </Text>
        
        {/* Use TechCapsule component for technology capsules */}
        <Flex wrap="wrap" gap={2}>
          {technologies && technologies.map((tech, idx) => (
            <TechCapsule key={idx} label={tech.label} color={tech.color} />
          ))}
        </Flex>
      </Box>
    </MotionBox>
  );
}