'use client';

import { Box, Heading, Text, Flex, SimpleGrid, Image } from '@chakra-ui/react';
import GradientHeading from '../../components/GradientHeading';
import TechCapsule from '../../components/TechCapsule';
import ProjectNav from '../../components/ProjectNav';

const prototypes = [
  {
    title: 'Slay the Teamfight',
    image: '/assets/projects/Prototype1.png',
    description: 'A single-player autobattler inspired by Teamfight Tactics and Slay the Spire. Build a team, acquire new units and spells, and adapt your strategy to take on increasingly difficult encounters.',
  },
  {
    title: 'Vassals and Castles',
    image: '/assets/projects/Prototype2.png',
    description: 'An online strategy game inspired by the classic board game Feudal and chess. Players compete to capture their opponents’ castles in matches designed for 2–4 players.',
  },
  {
    title: 'Tongue Puncher',
    image: '/assets/projects/Prototype3.png',
    description: 'A fast-paced 2D platformer where the player controls a critter with a hand at the end of its tongue. The game is built around this unusual movement mechanic and large, playground-like levels.',
  },
  {
    title: 'Final Fantasy Tactics 2 — Combat Proof of Concept',
    image: '/assets/projects/Prototype4.png',
    description: 'A recreation and extension of the classic Final Fantasy Tactics combat system. The prototype explores a materia/gem system inspired by Final Fantasy VII and Path of Exile, allowing players to equip abilities that can diversify a class or further enhance its existing strengths.',
  },
  {
    title: 'Top-Down Insaniquarium',
    image: '/assets/projects/Prototype5.png',
    description: 'A reimagining of PopCap’s Insaniquarium from a top-down perspective. The new perspective emphasizes mobility and gives the game a more active, top-down shooter feel.',
  },
  {
    title: 'Archipelago',
    image: '/assets/projects/Prototype6.png',
    description: 'A traditional roguelike adventure game set across a chain of islands, combining traditional roguelike ideas with a larger, lower-stakes world and more deliberate pacing.',
  },
];

export default function GodotPrototypesPage() {
  return (
    <Box maxW="1000px" mx="auto" py={12} px={4}>
      <GradientHeading as="h1" size="2xl" textAlign="center" mb={4}>
        Godot Prototypes
      </GradientHeading>
      <Text fontSize="lg" textAlign="center" maxW="800px" mx="auto" mb={6} color={{ base: 'gray.600', _dark: 'gray.300' }}>
        Check out some of my prototypes! I love making games, but a lot of the time, things fall flat
        for me because the scope ends up being too large. Here are a few game ideas I wanted to show you guys.
      </Text>
      <Flex wrap="wrap" justify="center" gap={3} mb={8}>
        <TechCapsule label="Godot" color="purple" />
        <TechCapsule label="Game Design" color="blue" />
        <TechCapsule label="Prototyping" color="green" />
      </Flex>

      <Box mb={12} borderRadius="xl" overflow="hidden" bg="black" boxShadow="lg">
        <video
          controls
          playsInline
          preload="metadata"
          aria-label="Godot Prototypes compilation"
          style={{ display: 'block', width: '100%', aspectRatio: '16 / 9' }}
        >
          <source src="/assets/projects/GodotPrototypes.mp4" type="video/mp4" />
          Your browser does not support embedded video.{' '}
          <a href="/assets/projects/GodotPrototypes.mp4">Watch the Godot Prototypes compilation.</a>
        </video>
      </Box>

      <Heading as="h2" size="xl" mb={6}>The Prototypes</Heading>
      <SimpleGrid columns={{ base: 1, md: 2 }} gap={6}>
        {prototypes.map((prototype) => (
          <Box
            as="section"
            key={prototype.title}
            p={{ base: 5, md: 6 }}
            borderRadius="xl"
            borderWidth="1px"
            borderColor={{ base: 'gray.200', _dark: 'whiteAlpha.200' }}
            bg={{ base: 'whiteAlpha.600', _dark: 'whiteAlpha.50' }}
          >
            <Image
              src={prototype.image}
              alt={`${prototype.title} gameplay screenshot`}
              loading="lazy"
              width="100%"
              aspectRatio={16 / 9}
              objectFit="contain"
              bg="black"
              borderRadius="lg"
              mb={4}
            />
            <Heading as="h3" size="lg" mb={3}>{prototype.title}</Heading>
            <Text lineHeight="tall" color={{ base: 'gray.600', _dark: 'gray.300' }}>
              {prototype.description}
            </Text>
          </Box>
        ))}
      </SimpleGrid>

      <ProjectNav currentSlug="godot-prototypes" />
    </Box>
  );
}
