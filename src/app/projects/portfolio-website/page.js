'use client';

import { Box, Heading, Text, Image, Flex, Button, VStack } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import TechCapsule from '../../components/TechCapsule'; // <-- Use TechCapsule instead of ProjectCapsule
import Link from 'next/link';

const MotionBox = motion(Box);

const technologies = [
  { label: "React", color: "react" },
  { label: "Next.js", color: "blue" },
  { label: "Chakra UI", color: "purple" }
];

export default function PortfolioWebsitePage() {
  return (
    <MotionBox
      maxW="1200px"
      mx="auto"
      py={16}
      px={{ base: 4, md: 8 }}
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: 'easeOut' }}
    >
      {/* Hero Section */}
      <VStack spacing={6} mb={12}>
        <Heading as="h1" size="2xl" textAlign="center">
          Portfolio Website
        </Heading>
        <Text fontSize="xl" color="gray.500" textAlign="center" maxW="600px">
          A modern portfolio showcasing my projects and skills with React, Next.js, and Chakra UI.
        </Text>
      </VStack>

      {/* Main Image */}
      <Box mb={8} borderRadius="xl" overflow="hidden" boxShadow="2xl">
        <Image
          src="/assets/projects/portfolio.jpg"
          alt="Portfolio Website"
          width="100%"
          height="400px"
          objectFit="cover"
        />
      </Box>

      {/* Technologies */}
      <Flex wrap="wrap" gap={3} mb={8} justifyContent="center">
        {technologies.map((tech, idx) => (
          <TechCapsule key={idx} label={tech.label} color={tech.color} />
        ))}
      </Flex>

      {/* Content Sections */}
      <VStack spacing={8} align="stretch">
        <Box>
          <Heading size="lg" mb={4}>About This Project</Heading>
          <Text>
            This portfolio website showcases my skills and projects using modern web technologies.
            It features a clean, responsive design with interactive animations and a focus on user experience.
          </Text>
        </Box>

        <Box>
          <Heading size="lg" mb={4}>Key Features</Heading>
          <VStack align="start" spacing={2}>
            <Text>• Responsive design that works on all devices</Text>
            <Text>• Interactive animations and transitions</Text>
            <Text>• Clean, modern UI with glass morphism effects</Text>
            <Text>• Dark/light mode support</Text>
            <Text>• Optimized for performance and SEO</Text>
          </VStack>
        </Box>

        <Box>
          <Heading size="lg" mb={4}>Technical Implementation</Heading>
          <Text>
            Built with React and Next.js for optimal performance and SEO. 
            Uses Chakra UI for consistent design system and Framer Motion for smooth animations.
            Deployed on Vercel with automatic CI/CD pipeline.
          </Text>
        </Box>
      </VStack>

      {/* CTA Buttons */}
      <Flex gap={4} justifyContent="center" mt={12}>
        <Button as={Link} href="#" target="_blank" colorScheme="blue" size="lg">
          View Live Site
        </Button>
        <Button as={Link} href="#" target="_blank" variant="outline" size="lg">
          View Code
        </Button>
      </Flex>
    </MotionBox>
  );
}