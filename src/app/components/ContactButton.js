'use client';

import { useState } from 'react';
import { Box, Button, Input, Textarea, VStack, EmailIcon } from '@chakra-ui/react';
import { Collapsible } from '@chakra-ui/react';

export default function ContactSection() {
  const [open, setOpen] = useState(false);

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
            <form action="https://formspree.io/f/{your_form_id}" method="POST">
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
          </Box>
        </Collapsible.Content>
      </Collapsible.Root>
    </>
  );
}