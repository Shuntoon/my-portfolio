'use client';

import { Box, Heading, Text, VStack, Button, Stack, Separator, Badge, AspectRatio } from '@chakra-ui/react';
import Image from 'next/image';
import NextLink from 'next/link';
import TechCapsule from '../../components/TechCapsule';
import GradientHeading from '../../components/GradientHeading';
import { motion } from 'framer-motion';

const MotionBox = motion(Box);
const MotionVStack = motion(VStack);

const techs = [
  { label: 'Godot 4', color: 'purple' },
  { label: 'GitHub Game Off 2025', color: 'green' },
  { label: 'Wave Defense', color: 'red' },
  { label: 'Co-op Dev', color: 'blue' },
];

const screenshots = [
  { src: '/images/blog/april-2026-update/wd1.png', alt: 'Wave Defender: Apocalypse gameplay' },
  { src: '/images/blog/april-2026-update/wd2.png', alt: 'Wave Defender: Apocalypse armory screen' },
];

export default function WaveDefenderPage() {
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
          GitHub Game Off 2025
        </Badge>
        <GradientHeading
          as="h1"
          size="2xl"
          textAlign="center"
          letterSpacing="tight"
          lineHeight="1.1"
        >
          Wave Defender: Apocalypse
        </GradientHeading>
        <Text
          fontSize={{ base: 'lg', md: 'xl' }}
          color={{ base: 'gray.600', _dark: 'gray.300' }}
          maxW="2xl"
        >
          Gear up and assemble your crew to defend your castle from the apocalypse. A wave defense game made with my brother for the GitHub Game Off 2025 jam.
        </Text>
      </MotionVStack>

      {/* Playable Embed */}
      <MotionBox
        mt={{ base: 8, md: 12 }}
        mb={{ base: 10, md: 16 }}
        borderRadius="2xl"
        overflow="hidden"
        boxShadow="0 8px 32px rgba(0,0,0,0.15)"
        border="1px solid"
        borderColor={{ base: 'rgba(0,0,0,0.08)', _dark: 'rgba(255,255,255,0.06)' }}
        bg="black"
        initial={{ opacity: 0, scale: 0.97 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <AspectRatio ratio={1024 / 596} w="100%">
          <iframe
            src="https://itch.io/embed-upload/15793557?color=2c3921"
            allowFullScreen
            title="Wave Defender: Apocalypse"
            style={{ border: 'none', width: '100%', height: '100%' }}
          />
        </AspectRatio>
      </MotionBox>

      {/* Play on itch.io fallback */}
      <MotionBox
        textAlign="center"
        mb={16}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.35 }}
      >
        <NextLink href="https://shuntoon.itch.io/wave-defender-apocalypse" target="_blank" rel="noopener noreferrer">
          <Button
            size="lg"
            borderRadius="full"
            px={10}
            py={6}
            fontWeight="bold"
            fontSize="lg"
            bg={{ base: 'rgba(255,255,255,0.15)', _dark: 'rgba(255,255,255,0.08)' }}
            backdropFilter="blur(12px)"
            border="1px solid"
            borderColor={{ base: 'rgba(255,255,255,0.3)', _dark: 'rgba(255,255,255,0.12)' }}
            color={{ base: 'black', _dark: 'white' }}
            boxShadow="0 4px 20px rgba(0,0,0,0.08)"
            _hover={{
              bg: { base: 'rgba(255,255,255,0.3)', _dark: 'rgba(255,255,255,0.15)' },
              transform: 'scale(1.05)',
              boxShadow: '0 6px 28px rgba(0,0,0,0.12)',
            }}
            transition="all 0.3s ease"
          >
            Play on itch.io
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
                  Wave Defender: Apocalypse is a wave defense game where you hold off undead enemies storming your castle. Between rounds you enter an armory to kit yourself out with new weapons — snipers, grenade launchers, revolvers, and more.
                </Text>
                <Text fontSize="md" color={{ base: 'gray.600', _dark: 'gray.300' }}>
                  I built this with my brother for the <strong>GitHub Game Off 2025</strong> jam — his very first time making a game.
                </Text>
              </VStack>
            </Box>

            <Separator />

            <Box>
              <Text fontSize="lg" mb={2} color={{ base: 'gray.600', _dark: 'gray.300' }} fontWeight="bold">
                Features
              </Text>
              <VStack spacing={2} align="start">
                <Text fontSize="md" color={{ base: 'gray.600', _dark: 'gray.300' }}>• Placed 30th out of 500+ entries in gameplay category</Text>
                <Text fontSize="md" color={{ base: 'gray.600', _dark: 'gray.300' }}>• Wave-based castle defense with escalating difficulty</Text>
                <Text fontSize="md" color={{ base: 'gray.600', _dark: 'gray.300' }}>• Armory system with a variety of unlockable weapons</Text>
                <Text fontSize="md" color={{ base: 'gray.600', _dark: 'gray.300' }}>• Day/night cycle affecting enemy behavior</Text>
                <Text fontSize="md" color={{ base: 'gray.600', _dark: 'gray.300' }}>• Upgrade system with strategic depth</Text>
                <Text fontSize="md" color={{ base: 'gray.600', _dark: 'gray.300' }}>• 10 levels of gameplay</Text>
              </VStack>
            </Box>
          </VStack>
        </Stack>
      </MotionBox>
    </MotionBox>
  );
}
