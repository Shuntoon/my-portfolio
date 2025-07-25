'use client';

import { Box, Heading, Text, Flex } from '@chakra-ui/react';
import NextLink from 'next/link';
import { motion } from 'framer-motion';
import Image from 'next/image';

const MotionBox = motion(Box);

export default function BlogPostCard({ post, isCompact = false, isTaller = false, posts }) {
  // If a posts array is passed, sort it by date (newest first)
  const sortedPosts = posts
    ? [...posts].sort((a, b) => new Date(b.date) - new Date(a.date))
    : null;

  // Use sortedPosts[0] if you want to always show the most recent post
  // Otherwise, render as usual
  const displayPost = sortedPosts ? sortedPosts[0] : post;

  return (
    <MotionBox
      as={NextLink}
      href={`/blog/${displayPost.slug}`} // This links to your dynamic route
      // Glass effect styling
      bg={{ base: "rgba(255, 255, 255, 0.15)", _dark: "rgba(255, 255, 255, 0.1)" }}
      backdropFilter="blur(10px)"
      border="1px solid"
      borderColor={{ base: "rgba(255, 255, 255, 0.3)", _dark: "rgba(255, 255, 255, 0.2)" }}
      color={{ base: "black", _dark: "white" }}
      p={0} // Remove padding for image to go edge-to-edge
      rounded="lg"
      overflow="hidden" // Ensure image doesn't overflow rounded corners
      // Animation
      whileHover={{ 
        scale: 1.02,
        backgroundColor: "rgba(255, 255, 255, 0.25)",
      }}
      transition={{ type: "spring", stiffness: 300 }}
      style={{ transition: "all 0.3s ease" }}
      w="100%"
      display="block"
      textDecoration="none"
      mb={4}
      // Make cards taller with minimum height
      minH={isTaller ? "240px" : "auto"}
    >
      {/* Featured Image */}
      {displayPost.image && (
        <Box position="relative" height={isTaller ? "220px" : "180px"} width="100%">
          <Image
            src={displayPost.image}
            alt={displayPost.title}
            fill
            style={{ 
              objectFit: 'cover',
              objectPosition: 'center'
            }}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </Box>
      )}

      <Box p={6}>
        <Flex direction="column" h="100%" justify="space-between">
          <Box>
            <Heading 
              as="h3" 
              fontSize={isCompact ? "lg" : "xl"} 
              mb={3}
              color={{ base: "gray.800", _dark: "white" }}
            >
              {displayPost.title}
            </Heading>
            
            <Text 
              fontSize="sm" 
              color={{ base: "gray.600", _dark: "gray.300" }}
              mb={4}
            >
              {displayPost.date}
            </Text>
            
            <Text 
              fontSize={isCompact ? "md" : "md"}
              color={{ base: "gray.700", _dark: "gray.200" }}
              noOfLines={isTaller ? 3 : 2}
              lineHeight="1.7"
            >
              {displayPost.excerpt}
            </Text>
          </Box>
          
          <Text 
            mt={4}
            fontSize="sm"
            fontWeight="medium"
            color={{ base: "blue.600", _dark: "blue.300" }}
          >
            Read more →
          </Text>
        </Flex>
      </Box>
    </MotionBox>
  );
}