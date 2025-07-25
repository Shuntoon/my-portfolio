'use client';

// Import Chakra UI components for layout and form
import { Box, Heading, Text, Input, Textarea, Button, VStack } from '@chakra-ui/react';

// Main ContactSection component
export default function ContactSection() {
  return (
    // Section container with padding and centered text
    <Box as="section" id="contact" py={20} textAlign="center">
      {/* Section heading */}
      <Heading as="h1" size="2xl" mb={4}>
        Contact
      </Heading>
      {/* Section description */}
      <Text fontSize="xl" mb={8}>
        Fill out the form below to send me an email!
      </Text>
      {/* Centered form container */}
      <Box maxW="600px" maxH="600px" mx="auto" my="auto">
        <form action="https://formspree.io/f/{your_form_id}" method="POST">
          {/* Fieldset for grouping form fields */}
          <fieldset style={{ border: "1px solid #ccc", borderRadius: "8px", padding: "16px" }}>
            {/* Legend for fieldset title */}
            <legend style={{ fontWeight: "bold", marginBottom: "8px" }}>Your Info</legend>
            {/* Vertical stack for form inputs */}
            <VStack spacing={4}>
              {/* Name input */}
              <Input type="text" name="name" placeholder="Your name" required />
              {/* Email input */}
              <Input type="email" name="email" placeholder="your@email.com" required style={{ marginBottom: "16px" }}/>
              {/* Message textarea */}
              <Textarea name="message" placeholder="Your message..." required />
              {/* Submit button */}
              <Button colorScheme="blue" type="submit" w="full">
                Send
              </Button>
            </VStack>
          </fieldset>
        </form>
      </Box>
    </Box>
  );
}