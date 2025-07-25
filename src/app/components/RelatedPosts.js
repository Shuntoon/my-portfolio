'use client';

import { Box, Heading, SimpleGrid } from '@chakra-ui/react';
import BlogPostCard from './BlogPostCard';
import { motion } from 'framer-motion';

const MotionBox = motion(Box);
const MotionHeading = motion(Heading);

export default function RelatedPosts({ currentSlug, posts, maxPosts = 3 }) {
  // Filter out current post and get only a few posts
  const relatedPosts = posts
    .filter(post => post.slug !== currentSlug)
    .slice(0, maxPosts);
  
  if (relatedPosts.length === 0) return null;
  
  return (
    <MotionBox 
      mt={12} 
      mb={16}
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, delay: 0.5 }}
    >
      <MotionHeading 
        as="h3" 
        fontSize="2xl" 
        mb={6}
        textAlign="center"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Continue Reading
      </MotionHeading>
      
      <SimpleGrid columns={{ base: 1, md: relatedPosts.length > 1 ? 2 : 1, lg: relatedPosts.length > 2 ? 3 : relatedPosts.length }} spacing={6}>
        {relatedPosts.map((post, index) => (
          <motion.div
            key={post.slug}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 + (index * 0.1) }}
          >
            <BlogPostCard post={post} />
          </motion.div>
        ))}
      </SimpleGrid>
    </MotionBox>
  );
}