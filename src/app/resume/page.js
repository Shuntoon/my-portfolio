'use client';

import { Box, VStack, Button, Image, Text } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import GradientHeading from '@/app/components/GradientHeading';
import { FiDownload } from 'react-icons/fi';

const MotionBox = motion(Box);

export default function ResumePage() {
  return (
    <Box
      maxW="900px"
      mx="auto"
      px={{ base: 4, md: 8 }}
      py={{ base: 10, md: 16 }}
    >
      <VStack gap={8} align="center">

        {/* Page heading */}
        <GradientHeading as="h1" size="2xl" textAlign="center">
          Resume
        </GradientHeading>

        {/* Resume image */}
        <MotionBox
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          w="100%"
          maxW="800px"
          borderRadius="2xl"
          overflow="hidden"
          border="1px solid"
          borderColor={{ base: "rgba(0,0,0,0.08)", _dark: "rgba(255,255,255,0.08)" }}
          boxShadow={{
            base: "0 8px 40px rgba(0,0,0,0.10)",
            _dark: "0 8px 40px rgba(0,0,0,0.45)"
          }}
        >
          <Image
            src="/assets/resume.png"
            alt="Resume"
            w="100%"
            h="auto"
            display="block"
          />
        </MotionBox>

        {/* Download button */}
        <Button
          as="a"
          href="/assets/resume.pdf"
          download
          size="lg"
          bg={{ base: "rgba(79,177,223,0.18)", _dark: "rgba(110,189,226,0.22)" }}
          backdropFilter="blur(10px)"
          border="1px solid"
          borderColor={{ base: "rgba(79,177,223,0.35)", _dark: "rgba(110,189,226,0.30)" }}
          color={{ base: "#0a5679", _dark: "#a8d8f0" }}
          _hover={{
            bg: { base: "rgba(79,177,223,0.30)", _dark: "rgba(110,189,226,0.38)" },
            transform: 'translateY(-2px)',
            boxShadow: '0 4px 18px rgba(79,177,223,0.18)',
          }}
          transition="all 0.3s cubic-bezier(.4,2,.3,1)"
          leftIcon={<FiDownload />}
        >
          Download PDF
        </Button>

        {/* Small note in case image hasn't loaded */}
        <Text
          fontSize="sm"
          opacity={0.5}
          textAlign="center"
        >
          Place <code>resume.png</code> and <code>resume.pdf</code> in <code>public/assets/</code> to display here.
        </Text>

      </VStack>
    </Box>
  );
}
