'use client';

import { Box, Flex, Text, Link, Icon, HStack } from '@chakra-ui/react';
import { FaGamepad, FaYoutube, FaPalette, FaLinkedin } from 'react-icons/fa';

export default function Footer() {
  return (
    <Box 
      as="footer"
      mt="auto"
      py={8}
      px={4}
      borderTop="1px solid"
      borderColor={{ base: "rgba(44, 44, 46, 0.1)", _dark: "rgba(231, 230, 217, 0.1)" }}
      // Glass effect
      bg={{ base: "rgba(255, 255, 255, 0.1)", _dark: "rgba(0, 0, 0, 0.2)" }}
      backdropFilter="blur(20px) saturate(180%)"
      borderRadius="xl"
      mx={1}
      mb={1}
      transition="all 0.3s ease"
    >
      <Flex 
        direction={{ base: "column", md: "row" }}
        align="center"
        justify="space-between"
        maxW="1200px"
        mx="auto"
        gap={4}
      >
        {/* Copyright */}
        <Text fontSize="sm" color={{ base: "gray.600", _dark: "gray.400" }}>
          © 2025 Shane Huntoon. All rights reserved.
        </Text>
        
        {/* Social Links */}
        <HStack
          spacing={2}
          flexWrap="wrap"
          justify={{ base: "center", md: "flex-start" }}
        >
          <Link 
            href="https://shuntoon.itch.io" 
            isExternal
            display="flex"
            alignItems="center"
            gap={2}
            color={{ base: "gray.700", _dark: "gray.300" }}
            px={3}
            py={2}
            borderRadius="lg"
            minW={{ base: "48px", md: "120px" }}
            justifyContent="center"
            _hover={{ 
              color: { base: "red.500", _dark: "red.400" },
              bg: { base: "rgba(255,255,255,0.18)", _dark: "rgba(44,116,245,0.10)" },
              transform: "scale(1.15)"
            }}
            transition="all 0.2s cubic-bezier(.4,2,.3,1)"
          >
            <Icon as={FaGamepad} boxSize={5} />
            <Text fontSize="sm" display={{ base: "none", md: "inline" }}>Itch.io</Text>
          </Link>
          
          <Link 
            href="https://youtube.com/@shuntoon" 
            isExternal
            display="flex"
            alignItems="center"
            gap={2}
            color={{ base: "gray.700", _dark: "gray.300" }}
            px={3}
            py={2}
            borderRadius="lg"
            minW={{ base: "48px", md: "120px" }}
            justifyContent="center"
            _hover={{ 
              color: { base: "red.500", _dark: "red.400" },
              bg: { base: "rgba(255,255,255,0.18)", _dark: "rgba(44,116,245,0.10)" },
              transform: "scale(1.15)"
            }}
            transition="all 0.2s cubic-bezier(.4,2,.3,1)"
          >
            <Icon as={FaYoutube} boxSize={5} />
            <Text fontSize="sm" display={{ base: "none", md: "inline" }}>YouTube</Text>
          </Link>

          <Link 
            href="https://artstation.com/shuntoon" 
            isExternal
            display="flex"
            alignItems="center"
            gap={2}
            color={{ base: "gray.700", _dark: "gray.300" }}
            px={3}
            py={2}
            borderRadius="lg"
            minW={{ base: "48px", md: "120px" }}
            justifyContent="center"
            _hover={{ 
              color: { base: "blue.500", _dark: "blue.400" },
              bg: { base: "rgba(255,255,255,0.18)", _dark: "rgba(44,116,245,0.10)" },
              transform: "scale(1.15)"
            }}
            transition="all 0.2s cubic-bezier(.4,2,.3,1)"
          >
            <Icon as={FaPalette} boxSize={5} />
            <Text fontSize="sm" display={{ base: "none", md: "inline" }}>ArtStation</Text>
          </Link>

          <Link 
            href="https://linkedin.com/in/shane-huntoon" 
            isExternal
            display="flex"
            alignItems="center"
            gap={2}
            color={{ base: "gray.700", _dark: "gray.300" }}
            px={3}
            py={2}
            borderRadius="lg"
            minW={{ base: "48px", md: "120px" }}
            justifyContent="center"
            _hover={{ 
              color: { base: "blue.600", _dark: "blue.400" },
              bg: { base: "rgba(255,255,255,0.18)", _dark: "rgba(44,116,245,0.10)" },
              transform: "scale(1.15)"
            }}
            transition="all 0.2s cubic-bezier(.4,2,.3,1)"
          >
            <Icon as={FaLinkedin} boxSize={5} />
            <Text fontSize="sm" display={{ base: "none", md: "inline" }}>LinkedIn</Text>
          </Link>
        </HStack>
      </Flex>
    </Box>
  );
}