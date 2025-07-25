'use client';

import { Box, Heading, Text, VStack, AspectRatio, Grid, Button, ExternalLinkIcon } from '@chakra-ui/react';
import TechCapsule from '../../components/TechCapsule';

const techs = [
  { label: "Godot 4", color: "purple" },
  { label: "YouTube", color: "red" },
  { label: "3D Development", color: "blue" },
  { label: "Education", color: "green" }
];

export default function MarbleTutorialSeriesPage() {
  return (
    <Box maxW="1000px" mx="auto" py={12} px={4}>
      <Heading as="h1" size="2xl" mb={4} textAlign="center">
        Marble Tutorial Series
      </Heading>
      <Text fontSize="lg" color="gray.500" mb={8} textAlign="center">
        An educational YouTube series teaching 3D game development in Godot 4 by creating a marble obstacle course game similar to Marble Blast Ultra.
      </Text>

      {/* YouTube Video Embed */}
      <Box mb={10}>
        <Heading size="lg" mb={4} textAlign="center">
          Episode 1: Getting Started
        </Heading>
        <AspectRatio ratio={16 / 9} borderRadius="lg" overflow="hidden" boxShadow="lg">
          <iframe
            src="https://www.youtube.com/embed/SdJplQOYXrs?start=12"
            title="Marble Tutorial Series - Episode 1"
            allowFullScreen
            style={{
              border: 'none',
              borderRadius: '8px'
            }}
          />
        </AspectRatio>
      </Box>

      {/* Technology Capsules */}
      <VStack spacing={4} mb={8}>
        <Heading size="md">Technologies & Tools</Heading>
        <Box display="flex" flexWrap="wrap" justifyContent="center" gap={3}>
          {techs.map(tech => (
            <TechCapsule key={tech.label} label={tech.label} color={tech.color} />
          ))}
        </Box>
      </VStack>

      {/* Project Details */}
      <Grid templateColumns={{ base: "1fr", md: "1fr 1fr" }} gap={8} mb={8}>
        <Box>
          <Heading size="md" mb={4}>
            About the Series
          </Heading>
          <Text mb={4}>
            This educational YouTube series is designed to teach beginners the fundamentals of 3D game development using Godot 4. 
            By recreating a marble obstacle course game similar to <strong>Marble Blast Ultra</strong>, viewers learn essential 
            game development concepts in a fun and engaging way.
          </Text>
          <Text>
            Each episode builds upon the previous one, gradually introducing more complex concepts while maintaining 
            a clear and beginner-friendly approach to learning.
          </Text>
        </Box>

        <Box>
          <Heading size="md" mb={4}>
            What You'll Learn
          </Heading>
          <VStack align="start" spacing={2}>
            <Text>• Setting up Godot 4 for 3D development</Text>
            <Text>• Creating 3D scenes and environments</Text>
            <Text>• Physics-based marble movement</Text>
            <Text>• Level design and obstacle creation</Text>
            <Text>• User interface and game flow</Text>
            <Text>• Game optimization techniques</Text>
          </VStack>
        </Box>
      </Grid>

      <Box mb={8}>
        <Heading size="md" mb={4}>
          Series Highlights
        </Heading>
        <VStack align="start" spacing={3}>
          <Text>
            <strong>Beginner-Friendly:</strong> No prior game development experience required
          </Text>
          <Text>
            <strong>Hands-On Learning:</strong> Build a complete game from start to finish
          </Text>
          <Text>
            <strong>Modern Engine:</strong> Learn using the latest Godot 4 features
          </Text>
          <Text>
            <strong>Classic Inspiration:</strong> Recreate the beloved Marble Blast Ultra gameplay
          </Text>
          <Text>
            <strong>Step-by-Step:</strong> Clear explanations and easy-to-follow tutorials
          </Text>
        </VStack>
      </Box>

      <Box mb={8}>
        <Heading size="md" mb={4}>
          My Role
        </Heading>
        <Text>
          As the creator and instructor of this series, I handle all aspects of content creation including:
        </Text>
        <VStack align="start" spacing={2} mt={3}>
          <Text>• Game development and coding</Text>
          <Text>• Video production and editing</Text>
          <Text>• Tutorial scripting and presentation</Text>
          <Text>• Community engagement and support</Text>
        </VStack>
      </Box>

      {/* Call to Action */}
      <Box textAlign="center" mt={12}>
        <Button
          as="a"
          href="https://www.youtube.com/watch?v=SdJplQOYXrs&t=12s"
          target="_blank"
          rel="noopener noreferrer"
          colorScheme="red"
          size="lg"
          rightIcon={<ExternalLinkIcon />}
          mb={4}
        >
          Watch on YouTube
        </Button>
        <Text fontSize="sm" color="gray.400">
          New episodes released regularly - Subscribe for updates!
        </Text>
      </Box>
    </Box>
  );
}