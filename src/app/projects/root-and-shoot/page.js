'use client';

import { Box, Heading, Text, VStack, Button, Stack, Separator, Badge } from '@chakra-ui/react';
import Image from 'next/image';
import NextLink from 'next/link';
import TechCapsule from '../../components/TechCapsule';
import GradientHeading from '../../components/GradientHeading';
import ProjectNav from '../../components/ProjectNav';
import { motion } from 'framer-motion';

const MotionBox = motion(Box);
const MotionVStack = motion(VStack);

const techs = [
  { label: 'Godot 4', color: 'purple' },
  { label: 'Global Game Jam 2023', color: 'green' },
  { label: 'Bullet Heaven', color: 'red' },
];

const featuredImage = {
  src: '/assets/projects/Root2.png',
  alt: 'Root and Shoot gameplay screenshot',
};

const screenshots = [
  { src: '/assets/projects/Root1.png', alt: 'Root and Shoot gameplay screenshot' },
];

export default function RootAndShootPage() {
  return (
    <MotionBox
      maxW="4xl"
      mx="auto"
      py={{ base: 8, md: 16 }}
      px={{ base: 4, md: 8 }}
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >

      {/* Hero */}
      <MotionVStack
        spacing={3}
        mb={2}
        textAlign="center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        <Badge
          fontSize="0.85em"
          px={4}
          py={1.5}
          borderRadius="full"
          bg={{ base: 'rgba(72, 160, 80, 0.15)', _dark: 'rgba(72, 160, 80, 0.2)' }}
          color={{ base: 'green.700', _dark: 'green.300' }}
          border="1px solid"
          borderColor={{ base: 'rgba(72, 160, 80, 0.3)', _dark: 'rgba(72, 160, 80, 0.25)' }}
          backdropFilter="blur(8px)"
          fontWeight="semibold"
          letterSpacing="wide"
        >
          Global Game Jam 2023
        </Badge>
        <GradientHeading
          as="h1"
          size="2xl"
          textAlign="center"
          letterSpacing="tight"
          lineHeight="1.1"
        >
          Root and Shoot
        </GradientHeading>
        <Text
          fontSize={{ base: 'lg', md: 'xl' }}
          color={{ base: 'gray.600', _dark: 'gray.300' }}
          maxW="2xl"
        >
          A bullet heaven where you play a little tree that roots and shoots. Grab upgrades, fight bosses, and buy new gear. Made initially for the Global Game Jam 2023 &mdash; themed &ldquo;roots.&rdquo;
        </Text>
      </MotionVStack>

      {/* Featured Screenshot */}
      <MotionBox
        mt={{ base: 8, md: 12 }}
        mb={{ base: 8, md: 12 }}
        borderRadius="2xl"
        overflow="hidden"
        boxShadow="0 8px 32px rgba(0,0,0,0.15)"
        border="1px solid"
        borderColor={{ base: 'rgba(0,0,0,0.08)', _dark: 'rgba(255,255,255,0.06)' }}
        initial={{ opacity: 0, scale: 0.97 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <Image
          src={featuredImage.src}
          alt={featuredImage.alt}
          width={1280}
          height={740}
          priority
          style={{ width: '100%', height: 'auto', display: 'block' }}
        />
      </MotionBox>

      {/* Play on itch.io */}
      <MotionBox
        mt={{ base: 8, md: 12 }}
        mb={{ base: 10, md: 16 }}
        textAlign="center"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.2 }}
      >
        <Text
          fontSize={{ base: 'md', md: 'lg' }}
          color={{ base: 'gray.600', _dark: 'gray.300' }}
          maxW="md"
          mx="auto"
          mb={6}
        >
          Play the browser build directly on itch.io.
        </Text>
        <NextLink href="https://shuntoon.itch.io/root-and-shoot" target="_blank" rel="noopener noreferrer">
          <Button
            size="lg"
            borderRadius="full"
            px={{ base: 12, md: 16 }}
            py={8}
            fontWeight="extrabold"
            fontSize={{ base: 'xl', md: '2xl' }}
            color="white"
            bg="green.500"
            border="2px solid"
            borderColor="green.400"
            boxShadow="0 8px 30px rgba(39, 174, 96, 0.4)"
            _hover={{
              bg: 'green.400',
              transform: 'scale(1.06)',
              boxShadow: '0 12px 40px rgba(39, 174, 96, 0.55)',
            }}
            _active={{ transform: 'scale(0.98)' }}
            transition="all 0.25s ease"
          >
            ▶&nbsp; Play on itch.io
          </Button>
        </NextLink>
      </MotionBox>

      {/* Main Content */}
      <MotionBox
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        <Stack
          direction={{ base: 'column', md: 'row' }}
          spacing={{ base: 10, md: 16 }}
          align="center"
          mb={12}
        >
          {/* Screenshots */}
          <VStack flex="1" spacing={12} align="center" mr={{ base: 0, md: 8 }}>
            {screenshots.map((s, i) => (
              <Box
                key={s.src}
                position="relative"
                w="100%"
                borderRadius="2xl"
                overflow="hidden"
                boxShadow="0 8px 32px rgba(0,0,0,0.12)"
                transition="transform 0.2s, box-shadow 0.2s"
                _hover={{ transform: 'scale(1.04)', boxShadow: '0 12px 40px rgba(0,0,0,0.18)' }}
                mb={i === 0 ? 6 : 0}
              >
                <Image
                  src={s.src}
                  alt={s.alt}
                  width={794}
                  height={446}
                  style={{ width: '100%', height: 'auto', display: 'block' }}
                />
              </Box>
            ))}
          </VStack>

          {/* Details */}
          <VStack flex="2" spacing={7} align="flex-start">
            <Box>
              <Text fontSize="lg" mb={2} color={{ base: 'gray.600', _dark: 'gray.300' }} fontWeight="bold">
                Technologies Used
              </Text>
              <Box display="flex" flexWrap="wrap" gap={3} mb={2}>
                {techs.map((tech) => (
                  <TechCapsule key={tech.label} label={tech.label} color={tech.color} />
                ))}
              </Box>
            </Box>

            <Separator />

            <Box>
              <Text fontSize="lg" mb={2} color={{ base: 'gray.600', _dark: 'gray.300' }} fontWeight="bold">
                About the Game
              </Text>
              <VStack spacing={3} align="start">
                <Text fontSize="md" color={{ base: 'gray.600', _dark: 'gray.300' }}>
                  Root and Shoot is a bullet heaven where you play a little tree that puts down roots and shoots enemies. It started as an entry for the <strong>Global Game Jam 2023</strong>, whose theme was &ldquo;roots.&rdquo;
                </Text>
                <Text fontSize="md" color={{ base: 'gray.600', _dark: 'gray.300' }}>
                  Grab upgrades, take down bosses, and buy new stuff as you grow into an unstoppable force of nature.
                </Text>
              </VStack>
            </Box>

            <Separator />

            <Box>
              <Text fontSize="lg" mb={2} color={{ base: 'gray.600', _dark: 'gray.300' }} fontWeight="bold">
                Features
              </Text>
              <VStack spacing={2} align="start">
                <Text fontSize="md" color={{ base: 'gray.600', _dark: 'gray.300' }}>• Bullet heaven gameplay with a tree that roots and shoots</Text>
                <Text fontSize="md" color={{ base: 'gray.600', _dark: 'gray.300' }}>• Collect upgrades to power up your run</Text>
                <Text fontSize="md" color={{ base: 'gray.600', _dark: 'gray.300' }}>• Fight challenging bosses</Text>
                <Text fontSize="md" color={{ base: 'gray.600', _dark: 'gray.300' }}>• Spend your earnings on new gear</Text>
                <Text fontSize="md" color={{ base: 'gray.600', _dark: 'gray.300' }}>• Built for the Global Game Jam 2023 &ldquo;roots&rdquo; theme</Text>
              </VStack>
            </Box>
          </VStack>
        </Stack>
      </MotionBox>

      <ProjectNav currentSlug="root-and-shoot" />
    </MotionBox>
  );
}
