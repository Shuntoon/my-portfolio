'use client';

import { Box, ChakraProvider } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { ColorModeProvider, useColorMode } from '@/components/ui/color-mode';
import Navbar from './components/Navbar';
import ContactButton from './components/ContactButton';
import Footer from './components/Footer';
import theme from '../theme';

function GradientBackground() {
  const { colorMode } = useColorMode();
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    setIsDark(colorMode === 'dark');
  }, [colorMode]);

  return <div id="mesh-bg" className={isDark ? 'mesh-dark' : 'mesh-light'} />;
}

export default function Providers({ children }) {
  return (
    <ChakraProvider value={theme}>
      <ColorModeProvider>
        <GradientBackground />
        <Box minH="100vh" position="relative" zIndex="1" color={{ base: '#2c2c2e', _dark: '#e7e6d9' }} transition="color 0.4s ease">
          <Navbar />
          {children}
          <ContactButton />
          <Footer />
        </Box>
      </ColorModeProvider>
    </ChakraProvider>
  );
}
