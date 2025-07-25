'use client';

import { Box, VStack, Text } from "@chakra-ui/react";
import { blogPosts } from "@/data/blogPosts";
import BlogPostCard from "../components/BlogPostCard";
import { motion } from 'framer-motion';
import GradientHeading from '../components/GradientHeading';
import ModelViewer from "../components/ModelViewer";

const MotionBox = motion(Box);

export default function BlogPage() {
  // Sort blog posts by date (newest first)
  const sortedPosts = [...blogPosts].sort((a, b) => 
    new Date(b.date) - new Date(a.date)
  );

  return (
    <MotionBox 
      maxW="900px" 
      mx="auto" 
      py={16} 
      px={{ base: 4, md: 8 }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <ModelViewer modelPath="/models/journal.glb" />
      <GradientHeading as="h1" size="2xl" textAlign="center" mb={3}>
        Blog
      </GradientHeading>
      
      <Text 
        textAlign="center" 
        maxW="700px" 
        mx="auto" 
        mb={12}
        color={{ base: "gray.600", _dark: "gray.300" }}
      >
        Sharing my thoughts and knowledge about development, design trends, and technical tutorials.
      </Text>

      <VStack spacing={8} align="stretch">
        {sortedPosts.map((post, index) => (
          <motion.div
            key={post.slug}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ 
              duration: 0.6, 
              delay: 0.2 + (index * 0.1),
              ease: [0.25, 0.1, 0.25, 1.0]
            }}
          >
            <BlogPostCard post={post} isTaller={true} />
          </motion.div>
        ))}
      </VStack>
    </MotionBox>
  );
}