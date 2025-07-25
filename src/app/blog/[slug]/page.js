'use client';

import React from 'react';
import { notFound } from "next/navigation";
import { Box, Heading, Text, Container, Flex, Button, Separator, ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/react";
import { blogPosts } from "@/data/blogPosts";
import Image from "next/image";
import NextLink from "next/link";
import RelatedPosts from "../../components/RelatedPosts";
import ReactMarkdown from 'react-markdown';
import { motion } from 'framer-motion';

// Create motion components
const MotionBox = motion(Box);
const MotionHeading = motion(Heading);
const MotionText = motion(Text);
const MotionContainer = motion(Container);
const MotionFlex = motion(Flex);

export default function BlogPostPage({ params }) {
  // Unwrap params Promise with React.use()
  const unwrappedParams = React.use(params);
  const slug = unwrappedParams.slug;
  
  // Find the current post using unwrapped slug
  const post = blogPosts.find(p => p.slug === slug);
  if (!post) return notFound();
  
  // Sort posts by date for correct navigation
  const sortedPosts = [...blogPosts].sort((a, b) => new Date(b.date) - new Date(a.date));
  
  // Find current post index using unwrapped slug
  const currentIndex = sortedPosts.findIndex(p => p.slug === slug);
  
  // Get prev and next posts (if they exist)
  const prevPost = currentIndex < sortedPosts.length - 1 ? sortedPosts[currentIndex + 1] : null;
  const nextPost = currentIndex > 0 ? sortedPosts[currentIndex - 1] : null;

  return (
    <MotionBox
      maxW="900px" 
      mx="auto" 
      pb={16} 
      pt={8}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Hero Image Section */}
      {post.image && (
        <MotionBox 
          position="relative" 
          height={{ base: "250px", md: "400px" }} 
          width="100%" 
          mb={8}
          borderRadius="xl"
          overflow="hidden"
          boxShadow="lg"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <Image
            src={post.image}
            alt={post.title}
            fill
            style={{ objectFit: 'cover' }}
            sizes="(max-width: 768px) 100vw, 900px"
            priority
          />
        </MotionBox>
      )}

      <MotionContainer 
        maxW="container.md" 
        px={{ base: 4, md: 8 }}
      >
        <MotionHeading 
          as="h1" 
          fontSize={{ base: "2xl", md: "4xl" }}
          mb={4}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {post.title}
        </MotionHeading>
        
        <MotionText 
          fontSize="md" 
          color={{ base: "gray.600", _dark: "gray.400" }} 
          mb={8}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          {post.date}
        </MotionText>
        
        <MotionBox 
          className="blog-content"
          fontSize="lg"
          lineHeight="1.8"
          color={{ base: "gray.800", _dark: "gray.100" }}
          mb={12}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <ReactMarkdown>{post.content}</ReactMarkdown>
        </MotionBox>
        
        <Separator mb={8} />
        
        <MotionFlex 
          justifyContent="space-between" 
          mb={12}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          {prevPost ? (
            <NextLink href={`/blog/${prevPost.slug}`} passHref>
              <Button 
                leftIcon={<ChevronLeftIcon />}
                variant="ghost"
                size="md"
                bg={{ base: "rgba(255, 255, 255, 0.1)", _dark: "rgba(255, 255, 255, 0.05)" }}
                backdropFilter="blur(10px)"
                border="1px solid"
                borderColor={{ base: "rgba(255, 255, 255, 0.2)", _dark: "rgba(255, 255, 255, 0.1)" }}
              >
                Previous Post
              </Button>
            </NextLink>
          ) : <Box />}
          
          <NextLink href="/blog" passHref>
            <Button 
              variant="ghost"
              size="md"
              bg={{ base: "rgba(255, 255, 255, 0.1)", _dark: "rgba(255, 255, 255, 0.05)" }}
              backdropFilter="blur(10px)"
              border="1px solid"
              borderColor={{ base: "rgba(255, 255, 255, 0.2)", _dark: "rgba(255, 255, 255, 0.1)" }}
            >
              All Posts
            </Button>
          </NextLink>
          
          {nextPost ? (
            <NextLink href={`/blog/${nextPost.slug}`} passHref>
              <Button 
                rightIcon={<ChevronRightIcon />}
                variant="ghost"
                size="md"
                bg={{ base: "rgba(255, 255, 255, 0.1)", _dark: "rgba(255, 255, 255, 0.05)" }}
                backdropFilter="blur(10px)"
                border="1px solid"
                borderColor={{ base: "rgba(255, 255, 255, 0.2)", _dark: "rgba(255, 255, 255, 0.1)" }}
              >
                Next Post
              </Button>
            </NextLink>
          ) : <Box />}
        </MotionFlex>
        
        <RelatedPosts currentSlug={slug} posts={sortedPosts} />
      </MotionContainer>
    </MotionBox>
  );
}