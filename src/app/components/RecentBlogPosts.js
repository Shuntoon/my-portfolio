'use client';

import { Box, Heading, VStack, Button } from '@chakra-ui/react';
import GradientHeading from './GradientHeading';
import NextLink from 'next/link';
import BlogPostCard from './BlogPostCard';

export default function RecentBlogPosts({ posts }) {
  return (
    <Box
      as="section"
      py={16}
      px={{ base: 4, md: 8 }}
      maxW="900px" // Narrower container for list view
      mx="auto"
	    mb={16}
      bg={{ base: "rgba(255, 255, 255, 0.05)", _dark: "rgba(0, 0, 0, 0.1)" }}
      backdropFilter="blur(5px)"
      borderRadius="xl"
      borderTop="1px solid"
      borderColor={{ base: "rgba(255, 255, 255, 0.1)", _dark: "rgba(255, 255, 255, 0.05)" }}
    >
      <GradientHeading 
        as="h2" 
        fontSize={{ base: "2xl", md: "3xl" }}
        textAlign="center" 
        mb={10}
      >
        Latest from the Blog
      </GradientHeading>
      
      {/* Changed to VStack for list layout */}
      <VStack spacing={8} align="stretch">
        {posts.map(post => (
          <BlogPostCard key={post.slug} post={post} isTaller={true} />
        ))}
      </VStack>
      
      <Box textAlign="center" mt={12}>
        <NextLink href="/blog" passHref>
          <Button
            as="a"
            bg={{ base: "rgba(255, 255, 255, 0.15)", _dark: "rgba(255, 255, 255, 0.1)" }}
            backdropFilter="blur(10px)"
            border="1px solid"
            borderColor={{ base: "rgba(255, 255, 255, 0.3)", _dark: "rgba(255, 255, 255, 0.2)" }}
            color={{ base: "black", _dark: "white" }}
            _hover={{
              bg: { base: "rgba(255, 255, 255, 0.25)", _dark: "rgba(255, 255, 255, 0.2)" },
              transform: "scale(1.05)"
            }}
            transition="all 0.3s ease"
          >
            View All Posts
          </Button>
        </NextLink>
      </Box>
    </Box>
  );
}