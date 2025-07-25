'use client';

import {
  Box,
  Text,
  VStack,
  Stack,
  Icon,
  Heading,
  SimpleGrid
} from '@chakra-ui/react';
import {
  FaCode,
  FaGamepad,
  FaMusic,
  FaCamera,
  FaDumbbell,
  FaBook,
  FaUserAstronaut,
  FaYoutube,
  FaLinkedin,
  FaArtstation,
  FaItchIo,
  FaBasketballBall,
  FaUtensils
} from 'react-icons/fa';
import ModelViewer from '../components/ModelViewer';
import InterestCard from '../components/InterestCard';
import { motion } from 'framer-motion';
import GradientHeading from '@/app/components/GradientHeading';

const MotionBox = motion(Box);

const interests = [
  {
    title: "Gaming",
    icon: FaGamepad,
    description: "Love exploring virtual worlds, strategy games, and the artistry behind game design."
  },
  {
    title: "Sports",
    icon: FaBasketballBall,
    description: "Enjoy staying active through basketball, hiking, and other sports for fun and fitness."
  },
  {
    title: "Programming",
    icon: FaCode,
    description: "Passionate about web development, creating interactive experiences, and learning new technologies."
  },
  {
    title: "Cooking",
    icon: FaUtensils,
    description: "Experimenting in the kitchen, trying new recipes, and sharing good food with friends and family."
  }
];

// Add your social links here
const socialLinks = [
  {
    label: "YouTube",
    url: "https://www.youtube.com/@shuntoon",
    icon: FaYoutube,
    color: "#FF0000"
  },
  {
    label: "ArtStation",
    url: "https://www.artstation.com/shuntoon",
    icon: FaArtstation,
    color: "#13AFF0"
  },
  {
    label: "LinkedIn",
    url: "https://www.linkedin.com/in/shane-huntoon",
    icon: FaLinkedin,
    color: "#0077B5"
  },
  {
    label: "Itch.io",
    url: "https://shuntoon.itch.io/",
    icon: FaItchIo,
    color: "#FA5C5C"
  }
];

export default function AboutSection() {
  return (
    <MotionBox
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      as="section"
      id="about"
      py={16}
      px={{ base: 4, md: 8 }}
    >
      {/* 3D Model */}
      <Box mb={10}>
        
        <ModelViewer modelPath="/models/license.glb" shadowHeight={-1.8} />
      </Box>

      <GradientHeading as="h1" size="3xl" textAlign="center" mb={6}>
        About Me
      </GradientHeading>

      {/* Profile Card with Glass Effect */}
      <MotionBox
        mb={16}
        p={{ base: 6, md: 8 }}
        borderRadius="2xl"
        bg={{ base: "rgba(255, 255, 255, 0.08)", _dark: "rgba(0, 0, 0, 0.15)" }}
        backdropFilter="blur(10px) saturate(180%)"
        border="1px solid"
        borderColor={{ base: "rgba(255, 255, 255, 0.2)", _dark: "rgba(255, 255, 255, 0.1)" }}
        boxShadow="0 4px 30px rgba(0, 0, 0, 0.1)"
        whileHover={{ scale: 1.01 }}
        transition={{ duration: 0.3 }}
      >
        <Stack
          direction={{ base: "column", md: "row" }}
          align="center"
          spacing={8}
          w="100%"
          justify="center"
        >
          <Box
            w="150px"
            h="150px"
            borderRadius="full"
            overflow="hidden"
            border="4px solid"
            borderColor={{ base: "rgba(255, 255, 255, 0.3)", _dark: "rgba(255, 255, 255, 0.2)" }}
            boxShadow="0 4px 20px rgba(0, 0, 0, 0.15)"
            mr={{ base: 0, md: 8 }}
          >
            <img
              src="/assets/Face.jpg"
              alt="Shane Huntoon"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover"
              }}
            />
          </Box>
          <Box maxW="lg" display="flex" alignItems="center">
            <Box flex="1">
              <GradientHeading
                as="h2"
                size="lg"
                mb={2}
                display="flex"
                alignItems="center"
                gap={2}
              >
                Shane Huntoon
              </GradientHeading>
              <Text fontSize="md" color={{ base: "gray.600", _dark: "gray.300" }}>
                I'm a passionate developer who loves creating interactive web experiences and exploring new technologies. 
                When I'm not coding, you can find me gaming, listening to music, or capturing moments through photography. 
                I believe in continuous learning and bringing creativity to everything I do.
              </Text>
            </Box>
            {/* Social Links as Apple Glass Icons to the right of summary */}
            <SimpleGrid columns={2} spacing={8} ml={6}>
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ display: 'inline-flex', alignItems: 'center' }}
                >
                  <Box
                    as={link.icon}
                    boxSize={9}
                    p={2}
                    bg="rgba(255,255,255,0.18)"
                    backdropFilter="blur(8px) saturate(180%)"
                    borderRadius="xl"
                    border="1px solid"
                    borderColor="rgba(255,255,255,0.25)"
                    color={link.color}
                    transition="transform 0.2s, box-shadow 0.2s"
                    boxShadow="0 2px 8px rgba(0,0,0,0.10)"
                    _hover={{
                      transform: 'scale(1.18)',
                      boxShadow: '0 4px 16px rgba(0,0,0,0.18)',
                      bg: 'rgba(255,255,255,0.28)'
                    }}
                    mr={2}
                    mb={2} // Add margin bottom for extra spacing
                  />
                </a>
              ))}
            </SimpleGrid>
          </Box>
        </Stack>
      </MotionBox>

      {/* Interests Section with Glass Cards */}
      <MotionBox
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        bg={{ base: "rgba(255, 255, 255, 0.05)", _dark: "rgba(0, 0, 0, 0.1)" }}
        backdropFilter="blur(8px)"
        borderRadius="xl"
        borderTop="1px solid"
        borderColor={{ base: "rgba(255, 255, 255, 0.1)", _dark: "rgba(255, 255, 255, 0.05)" }}
        p={8}
      >
        <VStack spacing={8}>
          <GradientHeading 
            as="h3" 
            size="xl" 
            textAlign="center"
            mb={4}
          >
            My Interests
          </GradientHeading>
          
          <VStack spacing={4} align="stretch" w="100%">
            {interests.map((interest, idx) => (
              <InterestCard
                key={idx}
                title={interest.title}
                icon={interest.icon}
                description={interest.description}
              />
            ))}
          </VStack>
        </VStack>
      </MotionBox>
    </MotionBox>
  );
}