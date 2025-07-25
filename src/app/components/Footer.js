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
        <HStack spacing={6}>
          <Link 
            href="https://your-itch-profile.itch.io" 
            isExternal
            display="flex"
            alignItems="center"
            gap={2}
            color={{ base: "gray.700", _dark: "gray.300" }}
            _hover={{ 
              color: { base: "red.500", _dark: "red.400" },
              transform: "scale(1.1)"
            }}
            transition="all 0.3s ease"
          >
            <Icon as={FaGamepad} boxSize={5} />
            <Text fontSize="sm">Itch.io</Text>
          </Link>
          
          <Link 
            href="https://youtube.com/@yourchannel" 
            isExternal
            display="flex"
            alignItems="center"
            gap={2}
            color={{ base: "gray.700", _dark: "gray.300" }}
            _hover={{ 
              color: { base: "red.500", _dark: "red.400" },
              transform: "scale(1.1)"
            }}
            transition="all 0.3s ease"
          >
            <Icon as={FaYoutube} boxSize={5} />
            <Text fontSize="sm">YouTube</Text>
          </Link>

          <Link 
            href="https://artstation.com/yourprofile" 
            isExternal
            display="flex"
            alignItems="center"
            gap={2}
            color={{ base: "gray.700", _dark: "gray.300" }}
            _hover={{ 
              color: { base: "blue.500", _dark: "blue.400" },
              transform: "scale(1.1)"
            }}
            transition="all 0.3s ease"
          >
            <Icon as={FaPalette} boxSize={5} />
            <Text fontSize="sm">ArtStation</Text>
          </Link>

          <Link 
            href="https://linkedin.com/in/your-linkedin-profile" 
            isExternal
            display="flex"
            alignItems="center"
            gap={2}
            color={{ base: "gray.700", _dark: "gray.300" }}
            _hover={{ 
              color: { base: "blue.600", _dark: "blue.400" },
              transform: "scale(1.1)"
            }}
            transition="all 0.3s ease"
          >
            <Icon as={FaLinkedin} boxSize={5} />
            <Text fontSize="sm">LinkedIn</Text>
          </Link>
        </HStack>
      </Flex>
    </Box>
  );
}