import { Box } from '@chakra-ui/react';

export default function TechCapsule({ label }) {
  return (
    <Box
      as="span"
      display="inline-block"
      px={2}
      py={1}
      fontSize="xs"
      fontWeight="600"
      borderRadius="sm"
      bg={{ base: 'rgba(36, 102, 107, 0.07)', _dark: 'rgba(141, 200, 204, 0.06)' }}
      color={{ base: '#245960', _dark: '#a5d5d8' }}
      border="1px solid"
      borderColor={{ base: 'rgba(36, 102, 107, 0.3)', _dark: 'rgba(141, 200, 204, 0.3)' }}
      mr={2}
      mb={2}
    >
      {label}
    </Box>
  );
}
