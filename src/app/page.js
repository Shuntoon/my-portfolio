'use client';

import Image from "next/image";
import styles from "./page.module.css";

import { Box, Text, Flex } from "@chakra-ui/react";
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
    title: "Portfolio Website",
    description: "A modern portfolio showcasing my projects and skills with React, Next.js, and Chakra UI. Features responsive design and interactive elements.",
    image: "/assets/projects/PortfolioWebsiteCap.png",
    technologies: [
      { label: "React", color: "react" },
      { label: "Next.js", color: "blue" },
      { label: "Chakra UI", color: "purple" }
    ],
    projectLink: "/projects/portfolio-website"
  },
  {
    title: "Marble Tutorial Series",
    description: "An educational YouTube series teaching 3D game development in Godot 4 by creating a marble obstacle course game similar to Marble Blast Ultra.",
    image: "/assets/projects/MarbleImg1.png",
    technologies: [
      { label: "Godot 4", color: "purple" },
      { label: "YouTube", color: "red" },
      { label: "3D Development", color: "blue" },
      { label: "Education", color: "green" }
    ],
    projectLink: "/projects/marble-tutorial-series"
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
      <ModelViewer modelPath="/models/joystick.glb" shadowHeight={-2.3} />
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
          Creating immersive gaming experiences through innovative design and development. 
          Passionate about crafting engaging gameplay and intuitive user interfaces.
        </Text>
      </Box>
      
      {/* Featured Projects Section */}
      <Box py={16}>
        <GradientHeading 
          as="h2" 
          size="xl" 
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
          A selection of my best work showcasing my skills in web development,
          design, and problem-solving.
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
      
      {/* Blog Posts Section */}
      <Box py={16}>
        {/* Add section description */}
        <Text 
          textAlign="center" 
          maxW="700px" 
          mx="auto" 
          mb={8}
          color={{ base: "gray.600", _dark: "gray.300" }}
        >
          Thoughts, tutorials, and insights about web development, design trends,
          and my journey as a developer.
        </Text>
        
        <RecentBlogPosts posts={recentPosts} />
      </Box>
    </MotionBox>
  );
}
