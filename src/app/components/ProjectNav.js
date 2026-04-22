'use client';

import { Box, Button } from '@chakra-ui/react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import NextLink from 'next/link';
import { projects } from '@/data/projects';

const btnStyle = {
  variant: 'ghost',
  bg: { base: 'rgba(255,255,255,0.10)', _dark: 'rgba(255,255,255,0.05)' },
  backdropFilter: 'blur(10px)',
  border: '1px solid',
  borderColor: { base: 'rgba(255,255,255,0.20)', _dark: 'rgba(255,255,255,0.10)' },
};

export default function ProjectNav({ currentSlug }) {
  const idx = projects.findIndex(p => p.slug === currentSlug);
  const prev = idx > 0 ? projects[idx - 1] : null;
  const next = idx < projects.length - 1 ? projects[idx + 1] : null;

  return (
    <Box
      position="relative"
      display="grid"
      gridTemplateColumns="1fr auto 1fr"
      alignItems="center"
      mt={12}
      mb={4}
      maxW="4xl"
      mx="auto"
      px={{ base: 4, md: 8 }}
      gap={2}
    >
      {/* Left — Previous */}
      <Box justifySelf="start">
        {prev && (
          <NextLink href={prev.href} passHref>
            <Button {...btnStyle} size={{ base: 'sm', md: 'md' }}>
              <FaChevronLeft style={{ marginRight: '6px' }} />
              <span style={{ display: 'inline' }}>
                <span style={{ display: 'inline' }} className="mobile-label">Prev</span>
                <span style={{ display: 'none' }} className="desktop-label">Previous Project</span>
              </span>
            </Button>
          </NextLink>
        )}
      </Box>

      {/* Center — always centered */}
      <Box justifySelf="center">
        <NextLink href="/projects" passHref>
          <Button {...btnStyle} size={{ base: 'sm', md: 'md' }}>All Projects</Button>
        </NextLink>
      </Box>

      {/* Right — Next */}
      <Box justifySelf="end">
        {next && (
          <NextLink href={next.href} passHref>
            <Button {...btnStyle} size={{ base: 'sm', md: 'md' }}>
              <span style={{ display: 'inline' }}>
                <span style={{ display: 'inline' }} className="mobile-label">Next</span>
                <span style={{ display: 'none' }} className="desktop-label">Next Project</span>
              </span>
              <FaChevronRight style={{ marginLeft: '6px' }} />
            </Button>
          </NextLink>
        )}
      </Box>
    </Box>
  );
}
