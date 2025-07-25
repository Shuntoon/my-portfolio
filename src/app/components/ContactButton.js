'use client';

import { useState } from 'react';
import { Box, Button, Input, Textarea, VStack, Text } from '@chakra-ui/react';
import { Collapsible } from '@chakra-ui/react';

export default function ContactSection() {
  const [open, setOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here (Formspree or your preferred method)
    setSubmitted(true);
    
    // Reset after 3 seconds
    setTimeout(() => {
      setSubmitted(false);
      setOpen(false);
    }, 3000);
  };

  // Close handler that resets state immediately
  const handleClose = () => {
    setOpen(false);
    // Reset submitted state after animation completes
    setTimeout(() => {
      setSubmitted(false);
    }, 300);
  };

  // Custom email icon component
  const EmailIcon = () => (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
      <polyline
        points="22,6 12,13 2,6"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );

  // Custom check icon component
  const CheckIcon = () => (
    <svg
      width="32"
      height="32"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="12" cy="12" r="10" fill="#10B981" />
      <path
        d="M9 12l2 2 4-4"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );

  return (
    <>
      {/* Floating Contact Button */}
      <Box
        position="fixed"
        bottom={8}
        right={8}
        zIndex={200}
      >
        <Button
          leftIcon={<EmailIcon />}
          colorScheme="blue"
          size="lg"
          borderRadius="full"
          boxShadow="lg"
          bg="rgba(255,255,255,0.25)"
          backdropFilter="blur(12px) saturate(180%)"
          border="1px solid"
          borderColor="rgba(255,255,255,0.18)"
          color="blue.600"
          _dark={{
            bg: "rgba(30,30,30,0.35)",
            color: "blue.200",
            borderColor: "rgba(255,255,255,0.08)"
          }}
          onClick={() => setOpen(!open)}
          _hover={{ transform: 'scale(1.08)' }}
        >
          Contact
        </Button>
      </Box>

      {/* Expandable Contact Form using Collapsible */}
      <Collapsible.Root open={open} onOpenChange={setOpen}>
        <Collapsible.Content>
          <Box
            position="fixed"
            bottom={24}
            right={8}
            zIndex={201}
            bg="rgba(255,255,255,0.25)"
            backdropFilter="blur(16px) saturate(180%)"
            color="gray.800"
            p={4}
            rounded="xl"
            boxShadow="2xl"
            maxW="320px"
            w="85vw"
            border="1px solid"
            borderColor="rgba(255,255,255,0.18)"
            transition="background 0.3s"
            _dark={{
              bg: "rgba(30,30,30,0.35)",
              color: "white",
              borderColor: "rgba(255,255,255,0.08)"
            }}
          >
            {submitted ? (
              // Thank you message
              <VStack spacing={4} textAlign="center">
                <CheckIcon />
                <Text fontSize="lg" fontWeight="bold">
                  Thank you!
                </Text>
                <Text fontSize="sm">
                  Your message has been sent successfully.
                </Text>
                <Button 
                  variant="ghost" 
                  w="full" 
                  onClick={handleClose}
                  size="sm"
                >
                  Close
                </Button>
              </VStack>
            ) : (
              // Contact form
              <form
                action="https://formspree.io/f/xpwldlyn" // <-- replace with your Formspree endpoint
                method="POST"
                onSubmit={() => setSubmitted(true)}
              >
                <VStack spacing={3}>
                  <Input 
                    type="text" 
                    name="name" 
                    placeholder="Your name" 
                    required 
                    size="sm"
                    bg="rgba(255,255,255,0.45)"
                    borderColor="rgba(255,255,255,0.18)"
                    color="gray.800"
                    _dark={{
                      bg: "rgba(30,30,30,0.45)",
                      color: "white",
                      borderColor: "rgba(255,255,255,0.08)"
                    }}
                  />
                  <Input 
                    type="email" 
                    name="email" 
                    placeholder="your@email.com" 
                    required 
                    size="sm"
                    bg="rgba(255,255,255,0.45)"
                    borderColor="rgba(255,255,255,0.18)"
                    color="gray.800"
                    _dark={{
                      bg: "rgba(30,30,30,0.45)",
                      color: "white",
                      borderColor: "rgba(255,255,255,0.08)"
                    }}
                  />
                  <Textarea 
                    name="message" 
                    placeholder="Your message..." 
                    required 
                    size="sm"
                    bg="rgba(255,255,255,0.45)"
                    borderColor="rgba(255,255,255,0.18)"
                    color="gray.800"
                    _dark={{
                      bg: "rgba(30,30,30,0.45)",
                      color: "white",
                      borderColor: "rgba(255,255,255,0.08)"
                    }}
                  />
                  <Button colorScheme="blue" type="submit" w="full" size="sm">
                    Send
                  </Button>
                  <Button 
                    variant="ghost" 
                    w="full" 
                    onClick={() => setOpen(false)} 
                    size="sm"
                  >
                    Cancel
                  </Button>
                </VStack>
              </form>
            )}
          </Box>
        </Collapsible.Content>
      </Collapsible.Root>
    </>
  );
}