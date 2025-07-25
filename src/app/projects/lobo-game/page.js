'use client';

import { Box, Heading, Text, Image, Flex, VStack } from '@chakra-ui/react';
import TechCapsule from '../../components/TechCapsule';

const technologies = [
  { label: "Godot 4", color: "purple" },
  { label: "Aseprite Pixel Art", color: "yellow" },
  { label: "UI/UX Design", color: "blue" },
  { label: "Coding", color: "green" }
];

export default function LoboGamePage() {
  return (
    <Box maxW="900px" mx="auto" py={12} px={4}>
      <Heading as="h1" size="2xl" mb={4} textAlign="center">
        Lobo Game
      </Heading>
      <Text fontSize="lg" color={{ base: 'gray.600', _dark: 'gray.300' }} mb={8} textAlign="center">
        A homage to the classic NES game Jackal, built in Godot 4 with custom pixel art and modern UI/UX.
      </Text>

      <Flex
        direction={{ base: 'column', md: 'row' }}
        gap={8}
        align="center"
        mb={8}
      >
        <Box flex="1" minW="250px">
          <Image
            src="/assets/projects/LoboImg1.png"
            alt="Lobo Game Preview"
            borderRadius="lg"
            boxShadow="md"
            width="100%"
            height="auto"
            objectFit="cover"
          />
        </Box>
        <VStack flex="1" align="start" spacing={2}>
          <Flex wrap="wrap" gap={2}>
            {technologies.map((tech, idx) => (
              <TechCapsule key={idx} label={tech.label} color={tech.color} />
            ))}
          </Flex>
        </VStack>
      </Flex>

      <Box mb={8}>
        <Heading size="md" mb={2}>
          About the Project
        </Heading>
        <Text>
          <strong>Lobo</strong> is a top-down action game inspired by the NES classic <strong>Jackal</strong>. 
          The project is being developed in <strong>Godot 4</strong>, with all pixel art created in <strong>Aseprite</strong>. 
          I am responsible for the coding, gameplay mechanics, and UI/UX design, aiming to capture the retro feel while adding modern touches.
        </Text>
      </Box>

      <Box mb={8}>
        <Heading size="md" mb={2}>
          Features
        </Heading>
        <VStack align="start" spacing={2}>
          <Text>• Classic top-down shooter gameplay</Text>
          <Text>• Custom pixel art and animations</Text>
          <Text>• Responsive and intuitive UI/UX</Text>
          <Text>• Modern enhancements while staying true to retro roots</Text>
          <Text>• Built entirely in Godot 4</Text>
        </VStack>
      </Box>

      <Box mb={8}>
        <Heading size="md" mb={2}>
          Development Tools
        </Heading>
        <VStack align="start" spacing={2}>
          <Text><strong>Godot 4</strong> – Game engine for coding and level design</Text>
          <Text><strong>Aseprite</strong> – Pixel art and sprite creation</Text>
          <Text><strong>Custom UI/UX</strong> – Designed and implemented by me</Text>
        </VStack>
      </Box>

      <Box mb={8}>
        <Heading size="md" mb={2}>
          My Role
        </Heading>
        <Text>
          I am the sole developer, artist, and designer for Lobo. My responsibilities include:
        </Text>
        <VStack align="start" spacing={2} mt={2}>
          <Text>• Game coding and logic</Text>
          <Text>• Pixel art and animation</Text>
          <Text>• UI/UX design and implementation</Text>
        </VStack>
      </Box>

      <Box textAlign="center" mt={12}>
        <Text fontSize="md" color="gray.400">
          Stay tuned for updates and a playable demo!
        </Text>
      </Box>
    </Box>
  );
}