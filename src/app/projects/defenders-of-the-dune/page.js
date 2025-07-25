'use client';

import { Box, Heading, Text, Link, Image, AspectRatio, VStack, Button, Badge, Stack, Separator } from '@chakra-ui/react';
import TechCapsule from '../../components/TechCapsule';

const media = [
  {
    type: 'video',
    src: '/assets/projects/DoDVid.mp4',
    alt: 'Defenders of the Dune trailer'
  },
  {
    type: 'image',
    src: '/assets/projects/DoDImg1.jpg',
    alt: 'Defenders of the Dune gameplay screenshot 1'
  },
  {
    type: 'image',
    src: '/assets/projects/DoDImg2.jpg',
    alt: 'Defenders of the Dune gameplay screenshot 2'
  }
];

const techs = [
  { label: "Unity", color: "purple" },
  { label: "GitHub", color: "blue" },
  { label: "Notion", color: "green" },
  { label: "Figma", color: "red" }
];

export default function DefendersOfTheDunePage() {
  return (
    <Box maxW="4xl" mx="auto" py={{ base: 8, md: 16 }} px={{ base: 4, md: 8 }}>
      {/* Hero Section */}
      <VStack spacing={2} mb={2}>
        <Badge colorScheme="yellow" fontSize="1em" px={3} py={1} borderRadius="md">
          Steam Release
        </Badge>
        <Heading
          size="2xl"
          textAlign="center"
          letterSpacing="tight"
          fontWeight="extrabold"
          lineHeight="1.1"
        >
          Defenders of the Dune
        </Heading>
        <Text
          fontSize={{ base: "lg", md: "xl" }}
          color={{ base: 'gray.600', _dark: 'gray.300' }}
          textAlign="center"
          maxW="2xl"
        >
          A strategic action game set in a harsh desert world, developed in collaboration with <b>Wolversoft</b>, a subsidiary studio of the University of Michigan. I led the <b>gameplay UI design</b>, <b>gameplay systems</b>, and assisted with <b>art direction</b> to create a visually immersive and intuitive player experience.
        </Text>
      </VStack>

      {/* Video Showcase */}
      <Box
        mt={{ base: 8, md: 12 }}
        mb={{ base: 10, md: 16 }}
        borderRadius="2xl"
        overflow="hidden"
        boxShadow="2xl"
        bg="black"
      >
        <AspectRatio ratio={16 / 9} w="100%">
          <video
            controls
            poster={media[1].src}
            style={{
              borderRadius: '1.5rem',
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              background: '#111'
            }}
          >
            <source src={media[0].src} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </AspectRatio>
      </Box>

      {/* Main Content */}
      <Stack
        direction={{ base: "column", md: "row" }}
        spacing={{ base: 10, md: 24 }} // Increased gap between columns
        align="center"
        mb={12}
      >
        {/* Left: Screenshots */}
        <VStack flex="1" spacing={12} mr={12} align="center"> {/* Increased gap between images */}
          <Image
            src={media[1].src}
            alt={media[1].alt}
            borderRadius="2xl"
            boxShadow="2xl"
            objectFit="cover"
            maxH="260px"
            w="100%"
			mb={6}
            transition="transform 0.2s"
            _hover={{ transform: 'scale(1.04)', boxShadow: '0 12px 40px rgba(0,0,0,0.18)' }}
          />
          <Image
            src={media[2].src}
            alt={media[2].alt}
            borderRadius="2xl"
            boxShadow="2xl"
            objectFit="cover"
            maxH="260px"
            w="100%"
            transition="transform 0.2s"
            _hover={{ transform: 'scale(1.04)', boxShadow: '0 12px 40px rgba(0,0,0,0.18)' }}
          />
        </VStack>
        {/* Right: Details */}
        <VStack flex="2" spacing={7} align="flex-start">
          <Box>
            <Text fontSize="lg" mb={2} color={{ base: 'gray.600', _dark: 'gray.300' }} fontWeight="bold">
              Technologies Used
            </Text>
            <Box display="flex" flexWrap="wrap" gap={3} mb={2}>
              {techs.map(tech => (
                <TechCapsule key={tech.label} label={tech.label} color={tech.color} />
              ))}
            </Box>
          </Box>
          <Separator />
          <Box>
            <Text fontSize="lg" mb={2} color={{ base: 'gray.600', _dark: 'gray.300' }} fontWeight="bold">
              My Contributions
            </Text>
            <VStack spacing={2} align="start">
              <Text fontSize="md" color={{ base: 'gray.600', _dark: 'gray.300' }}>
                • Designed and implemented the gameplay UI for clarity and engagement.
              </Text>
              <Text fontSize="md" color={{ base: 'gray.600', _dark: 'gray.300' }}>
                • Developed core gameplay systems and mechanics.
              </Text>
              <Text fontSize="md" color={{ base: 'gray.600', _dark: 'gray.300' }}>
                • Assisted with art direction to ensure a cohesive visual style.
              </Text>
            </VStack>
          </Box>
        </VStack>
      </Stack>

      {/* Call to Action */}
      <Box textAlign="center" mt={8}>
        <Button
          as={Link}
          href="https://store.steampowered.com/app/3394870/Defenders_of_the_Dune/"
          colorScheme="yellow"
          size="lg"
          target="_blank"
          rel="noopener noreferrer"
          borderRadius="full"
          boxShadow="lg"
          px={10}
          py={6}
          fontWeight="bold"
          fontSize="xl"
          _hover={{ bg: "yellow.400" }}
        >
          View on Steam
        </Button>
      </Box>
    </Box>
  );
}