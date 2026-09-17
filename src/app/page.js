'use client';

import Image from "next/image";
import styles from "./page.module.css";

import { Box, Text, Flex, Separator } from "@chakra-ui/react";
import { motion } from "framer-motion";
import HomeSection from './home/HomeSection.js';
import { blogPosts } from "@/data/blogPosts";
import RecentBlogPosts from "./components/RecentBlogPosts";
import GradientHeading from './components/GradientHeading';
import ModelViewer from "./components/ModelViewer";
import ProjectCapsule from './components/ProjectCapsule';

const MotionBox = motion(Box);

// Project data with hard-coded links
const featuredProjects = [
  {
    title: "Root and Shoot",
    description: "A bullet heaven where you play a little tree that roots and shoots enemies. Grab upgrades, fight bosses, and buy new gear. Made for the Global Game Jam 2023.",
    image: "/assets/projects/Root1.png",
    technologies: [
      { label: "Godot 4", color: "purple" },
      { label: "Global Game Jam 2023", color: "green" },
      { label: "Bullet Heaven", color: "red" }
    ],
    projectLink: "/projects/root-and-shoot"
  },
  {
    title: "Defenders of the Dune",
    description: "A strategic action game set in a harsh desert world. I led the game design and UX/UI design, focusing on engaging mechanics and intuitive interfaces.",
    image: "/assets/projects/DoDImg1.jpg",
    technologies: [
      { label: "Unity", color: "purple" },
      { label: "GitHub", color: "blue" },
      { label: "Notion", color: "green" },
      { label: "Figma", color: "red" }
    ],
    projectLink: "/projects/defenders-of-the-dune"
  },
  {
    title: "Wave Defender: Apocalypse",
    description: "A wave defense game built for GitHub Game Off 2025 with my brother. Defend your castle from the undead and upgrade your arsenal across 10 escalating waves.",
    image: "/images/blog/april-2026-update/wd1.png",
    technologies: [
      { label: "Godot 4", color: "purple" },
      { label: "GitHub Game Off 2025", color: "green" },
      { label: "Wave Defense", color: "red" }
    ],
    projectLink: "/projects/wave-defender"
  }
];

export default function HomePage() {
  // Get 5 most recent posts
  const recentPosts = [...blogPosts]
    .sort((a, b) => new Date(b.date) - new Date(a.date))
    .slice(0, 5);

  return (
    <MotionBox
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
    >
      {/* Hero Section */}
      <ModelViewer modelPath="/models/logo.glb" shadowHeight={-2.3} />
      <Box textAlign="center" py={20}>
        <GradientHeading
          as="h1"
          size="5xl"
          mb={4}
        >
          Shane Huntoon
        </GradientHeading>
        <Text fontSize="xl">Game Developer & Designer</Text>
        
        {/* Add a more detailed tagline/bio */}
        <Text 
          fontSize="md" 
          maxW="600px" 
          mx="auto" 
          mt={4} 
          color={{ base: "gray.600", _dark: "gray.300" }}
        >
          I love making games and tinkering with new ideas, mostly in Godot.
          Here are some games and prototypes I've been working on, along with a few things I've learned along the way.
        </Text>
      </Box>

      {/* Separator between Hero and Featured Projects */}
      <Separator
        my={12}
        maxW={{ base: "80%", md: "1000px" }}
        mx="auto"
        borderWidth="3px"
        borderColor={{ base: "gray.600", _dark: "gray.500" }}
      />

      {/* Featured Projects Section */}
      <Box py={16}>
        <GradientHeading 
          as="h2" 
          size="2xl" 
          textAlign="center"
          mb={3}
        >
          Featured Projects
        </GradientHeading>
        
        <Text 
          textAlign="center" 
          maxW="700px" 
          mx="auto" 
          mb={8}
          color={{ base: "gray.600", _dark: "gray.300" }}
        >
          A selection of my best work showcasing some of my highlighted projects.
        </Text>
        
        {/* Project items with square cards */}
        <Flex
          maxW="1200px"
          mx="auto"
          px={4}
          flexWrap="wrap"
          justifyContent="center"
          gap={8}
        >
          {featuredProjects.map((project, idx) => (
            <Box
              key={idx}
              flex="1 1 300px"
              maxW="350px"
              minW="260px"
              mb={8}
              display="flex"
              justifyContent="center"
            >
              <ProjectCapsule
                title={project.title}
                description={project.description}
                image={project.image}
                technologies={project.technologies}
                projectLink={project.projectLink} // Pass the hard-coded link
              />
            </Box>
          ))}
        </Flex>
      </Box>

      {/* Separator between Featured Projects and Blog */}
      <Separator
        my={12}
        maxW={{ base: "80%", md: "1000px" }}
        mx="auto"
        borderWidth="3px"
        borderColor={{ base: "gray.600", _dark: "gray.500" }}
      />

      {/* Blog Posts Section */}
      <GradientHeading 
        as="h2" 
        size="2xl" 
        textAlign="center"
        mb={-12}
      >
        My Blog
      </GradientHeading>

      <Box py={16}>
        {/* Add section description */}
        <Text 
          textAlign="center" 
          maxW="700px" 
          mx="auto" 
          mb={8}
          color={{ base: "gray.600", _dark: "gray.300" }}
        >
          Keeping you updated with news about projects and life.
        </Text>
        
        <RecentBlogPosts posts={recentPosts} />
      </Box>
    </MotionBox>
  );
}
