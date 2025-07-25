import { Box } from '@chakra-ui/react';
import { useRef } from 'react';

const colorMap = {
  react: { bg: '#20232a', border: '#61dafb', text: '#61dafb' },
  'next.js': { bg: '#000', border: '#fff', text: '#fff' },
  'chakra ui': { bg: '#319795', border: '#fff', text: '#fff' },
  typescript: { bg: '#007acc', border: '#fff', text: '#fff' },
  javascript: { bg: '#f7df1e', border: '#323330', text: '#323330' },
  node: { bg: '#3c873a', border: '#fff', text: '#fff' },
  'godot 4': { bg: '#478cbf', border: '#fff', text: '#fff' },
  aseprite: { bg: '#7d929e', border: '#fff', text: '#fff' },
  yellow: { bg: '#f1c40f', border: '#2c3e50', text: '#2c3e50' },
  green: { bg: '#27ae60', border: '#fff', text: '#fff' },
  red: { bg: '#e74c3c', border: '#fff', text: '#fff' },
  'ui/ux design': { bg: '#9b59b6', border: '#fff', text: '#fff' },
  coding: { bg: '#2ecc71', border: '#fff', text: '#fff' },
  youtube: { bg: '#ff0000', border: '#fff', text: '#fff' },
  '3d development': { bg: '#3498db', border: '#fff', text: '#fff' },
  education: { bg: '#16a085', border: '#fff', text: '#fff' },
  blue: { bg: '#4fb1df', border: '#fff', text: '#fff' },
  purple: { bg: '#4c74f5', border: '#fff', text: '#fff' },
};

const wiggleKeyframes = [
  { transform: 'rotate(0deg)' },
  { transform: 'rotate(-10deg)' },
  { transform: 'rotate(10deg)' },
  { transform: 'rotate(-8deg)' },
  { transform: 'rotate(8deg)' },
  { transform: 'rotate(0deg)' }
];

export default function TechCapsule({ label, color }) {
  const colors = colorMap[color?.toLowerCase()] || colorMap.blue;
  const capsuleRef = useRef(null);

  const handleMouseEnter = () => {
    const el = capsuleRef.current;
    if (el) {
      el.animate(wiggleKeyframes, { duration: 1200, easing: 'ease' });
    }
  };

  return (
    <Box
      ref={capsuleRef}
      display="inline-block"
      px={3}
      py={1.5}
      fontSize="xs"
      fontWeight="600"
      borderRadius="md"
      bg={colors.bg}
      color={colors.text}
      border="1px solid"
      borderColor={colors.border}
      mr={2}
      mb={2}
      cursor="pointer"
      onMouseEnter={handleMouseEnter}
      _hover={{
        transform: 'scale(1.05)',
        transition: 'transform 0.2s'
      }}
    >
      {label}
    </Box>
  );
}