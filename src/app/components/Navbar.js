'use client'; // Enable client-side rendering for this component

// Import necessary React hooks for state management
import { useState, useEffect } from 'react';
// Import Chakra UI components for layout and UI elements
import { Box, Flex, HStack, useDisclosure, Button } from '@chakra-ui/react';
// Import Framer Motion for animations
import { motion, AnimatePresence } from 'framer-motion';
// Import Next.js Link component for navigation
import NextLink from 'next/link';
// Import custom color mode toggle button
import { ColorModeButton } from "@/components/ui/color-mode";
// Import icons from React Icons (Feather icon set)
import { FiMenu, FiX } from 'react-icons/fi';
// Importing an astronaut icon from Font Awesome
import { GiWhaleTail } from 'react-icons/gi';

// Navigation links configuration - easy to update in one place
const Links = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Projects', href: '/projects' },
  { label: 'Blog', href: '/blog' },
];

export default function Navbar() {
  // State management for mobile menu toggle
  // We use useState instead of useDisclosure for more direct control
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  // Create a motion-enabled Box component using Framer Motion
  const MotionBox = motion(Box);
  
  // Function to toggle the mobile menu open/closed state
  // Includes logging for debugging purposes
  const toggleMenu = () => {
    console.log("Toggle button clicked, current state:", isMenuOpen);
    setIsMenuOpen(!isMenuOpen);
  };
  
  // Helper function to close the menu when a link is clicked
  // Improves UX by automatically closing the menu after selection
  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <Box
      // Glass-morphism background effect
      bg={{ base: "rgba(255, 255, 255, 0.1)", _dark: "rgba(0, 0, 0, 0.2)" }}
      // Enhanced blur effect for the glass appearance
      backdropFilter="blur(20px) saturate(180%)"
      // Subtle border for definition
      borderBottom="1px solid"
      borderColor={{ base: "rgba(255, 255, 255, 0.2)", _dark: "rgba(255, 255, 255, 0.1)" }}
      // Text color that adapts to color mode
      color={{ base: "black", _dark: "white" }}
      // Horizontal padding
      px={4}
      // Sticky positioning so navbar stays at the top during scroll
      position="sticky"
      top={0}
      // High z-index ensures navbar appears above other content
      zIndex={100}
      // Smooth transition for color mode changes
      transition="all 0.3s ease"
    >
      {/* Main navbar container with flexible layout */}
      <Flex h={16} alignItems="center" justifyContent="space-between">
        {/* Left side: Color mode toggle button */}
        <ColorModeButton />
        
        {/* Center: Site title/logo with astronaut icon */}
        <Box
          color={{ base: "black", _dark: "white" }}
          fontWeight="bold"
          fontSize="xl"
          display="flex"
          alignItems="center"
          justifyContent="center"
          position="absolute"
          left="50%"
          transform="translateX(-50%)"
          gap={2}
        >
          <GiWhaleTail style={{ marginRight: 8 }} />
          Shane Huntoon
        </Box>
        
        {/* Right side: Mobile menu toggle button (only visible on mobile) */}
        <Box display={{ base: 'block', md: 'none' }}>
          <Button
            onClick={toggleMenu}
            size="md"
            // Glass button styling with transparency
            bg={{ base: "rgba(255, 255, 255, 0.15)", _dark: "rgba(255, 255, 255, 0.1)" }}
            backdropFilter="blur(10px)"
            border="1px solid"
            borderColor={{ base: "rgba(255, 255, 255, 0.3)", _dark: "rgba(255, 255, 255, 0.2)" }}
            aria-label="Toggle Navigation"
          >
            {/* Dynamic icon that changes based on menu state */}
            {isMenuOpen ? <FiX size={18} color='gray' /> : <FiMenu size={18} color='gray'/>}
          </Button>
        </Box>
        
        {/* Desktop navigation links (hidden on mobile) */}
        <HStack spacing={8} alignItems="center" display={{ base: 'none', md: 'flex' }}>
          {Links.map((link) => (
            <NextLink key={link.label} href={link.href} passHref legacyBehavior>
              <Box
                as="a"
                textDecoration="none"
                backgroundColor={{ base: "rgba(255, 255, 255, 0.15)", _dark: "rgba(255, 255, 255, 0.1)" }}
                backdropFilter="blur(10px)"
                border="1px solid"
                borderColor={{ base: "rgba(255, 255, 255, 0.3)", _dark: "rgba(255, 255, 255, 0.2)" }}
                color={{ base: "black", _dark: "white" }}
                padding={3}
                rounded="lg"
                transition="all 0.3s cubic-bezier(.4,2,.3,1)"
                _hover={{
                  bg: { base: "rgba(79, 177, 223, 0.18)", _dark: "rgba(110, 189, 226, 0.33)" }, // More color on hover
                  color: { base: "#0a5679", _dark: "#a8b3beff" }, // Accent color on hover
                  transform: 'scale(1.08) translateY(-2px)', // Slightly larger and lifted
                  boxShadow: '0 4px 16px rgba(79,177,223,0.12)', // Subtle shadow
                  textDecoration: 'underline',
                  textUnderlineOffset: '4px',
                }}
              >
                {link.label}
              </Box>
            </NextLink>
          ))}
        </HStack>
      </Flex>
      
      {/* Mobile dropdown menu with animations */}
      {/* AnimatePresence enables exit animations when element is removed */}
      <AnimatePresence>
        {/* Only render menu when isMenuOpen is true */}
        {isMenuOpen && (
          <MotionBox
            // Initial animation state (hidden)
            initial={{ opacity: 0, height: 0 }}
            // Animated state (visible)
            animate={{ opacity: 1, height: "auto" }}
            // Exit animation (sliding up and fading out)
            exit={{ opacity: 0, height: 0 }}
            // Animation timing
            transition={{ duration: 0.3 }}
            // Only show on mobile devices
            display={{ md: 'none' }}
            // Hide overflow during animation
            overflow="hidden"
            // Styling for the dropdown container
            pb={4}
            bg={{ base: "rgba(255, 255, 255, 0.08)", _dark: "rgba(0, 0, 0, 0.15)" }}
            backdropFilter="blur(10px) saturate(180%)"
            borderBottomRadius="xl"
          >
            {/* Flex container for menu items */}
            <Flex 
              as="nav" 
              direction="column" 
              gap={3} 
              px={2} 
              py={3}
            >
              {/* Map through links array to create mobile menu items */}
              {Links.map((link, index) => (
                <motion.div
                  key={link.label}
                  // Initial state (slightly offset to the left)
                  initial={{ opacity: 0, x: -10 }}
                  // Animated state (fade in and slide to position)
                  animate={{ opacity: 1, x: 0 }}
                  // Staggered delay based on index for cascade effect
                  transition={{ delay: index * 0.1 }}
                >
                  <NextLink href={link.href} passHref legacyBehavior>
                    <Button
                      as="a"
                      w="full"
                      variant="ghost"
                      // Close menu when link is clicked
                      onClick={closeMenu}
                      // Glass-style mobile menu buttons
                      bg={{ base: "rgba(255, 255, 255, 0.15)", _dark: "rgba(255, 255, 255, 0.1)" }}
                      backdropFilter="blur(10px)"
                      border="1px solid"
                      borderColor={{ base: "rgba(255, 255, 255, 0.3)", _dark: "rgba(255, 255, 255, 0.2)" }}
                      color={{ base: "black", _dark: "white" }}
                      rounded="lg"
                      transition="all 0.2s cubic-bezier(.4,2,.3,1)"
                      _hover={{
                        bg: { base: "rgba(79, 177, 223, 0.18)", _dark: "rgba(76, 116, 245, 0.18)" },
                        color: { base: "#0a5679", _dark: "#a8a8be" },
                        transform: 'scale(1.04) translateY(-1px)',
                        boxShadow: '0 2px 8px rgba(79,177,223,0.10)',
                        textDecoration: 'underline',
                        textUnderlineOffset: '4px',
                      }}
                    >
                      {link.label}
                    </Button>
                  </NextLink>
                </motion.div>
              ))}
            </Flex>
          </MotionBox>
        )}
      </AnimatePresence>
    </Box>
  );
}