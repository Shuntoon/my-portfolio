'use client';

import { Box, Heading, Text, Stack, Icon } from '@chakra-ui/react';
import { motion } from 'framer-motion';

const MotionStack = motion(Stack);

export default function InterestCard({ title, description, icon }) {
  return (
    <MotionStack
      direction="row"
      align="center"
      w="100%"
      p={8}
      borderRadius="xl"
      
      // Glass effect styling
      bg={{ base: "rgba(255, 255, 255, 0.06)", _dark: "rgba(0, 0, 0, 0.15)" }}
      backdropFilter="blur(10px) saturate(180%)"
      border="1px solid"
      borderColor={{ base: "rgba(255, 255, 255, 0.2)", _dark: "rgba(255, 255, 255, 0.1)" }}
      
      // Animation and transitions
      transition="all 0.3s ease"
      whileHover={{ 
        scale: 1.02,
        backgroundColor: { base: "rgba(255, 255, 255, 0.1)", _dark: "rgba(0, 0, 0, 0.2)" }
      }}
      
      // Shadow effects
      boxShadow="0 4px 12px rgba(0,0,0,0.05)"
      _hover={{
        boxShadow: "0 8px 16px rgba(0,0,0,0.1)"
      }}
    >
      <Icon
        as={icon}
        boxSize={8}
        color={{ base: "blue.500", _dark: "blue.300" }}
        mr={4}
      />
      <Box flex="1">
        <Heading as="h4" size="md" mb={2} color={{ base: "gray.800", _dark: "white" }}>
          {title}
        </Heading>
        <Text fontSize="sm" color={{ base: "gray.600", _dark: "gray.300" }}>
          {description}
        </Text>
      </Box>
    </MotionStack>
  );
}