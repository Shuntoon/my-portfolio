'use client';

import { ColorModeProvider, useColorMode } from "@/components/ui/color-mode";
import { Roboto } from 'next/font/google';
import { ChakraProvider, Box } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import ContactButton from './components/ContactButton';
import Footer from './components/Footer';
import theme from "../theme";
import "../styles/globals.css";

const roboto = Roboto({
  subsets: ['latin'],
  variable: '--font-roboto',
  display: 'swap',
});

function GradientBackground() {
  const { colorMode } = useColorMode();
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    setIsDark(colorMode === 'dark');
  }, [colorMode]);

  return (
    <div id="mesh-bg" className={isDark ? 'mesh-dark' : 'mesh-light'}>
      <div className="blob blob-1" />
      <div className="blob blob-2" />
      <div className="blob blob-3" />
      <div className="blob blob-4" />
      <div className="blob blob-5" />
    </div>
  );
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={roboto.variable}>
        <ChakraProvider value={theme}>
          <ColorModeProvider>
            <GradientBackground />
            <Box 
              minH="100vh"
              position="relative"
              zIndex="1"
              color={{ base: "#2c2c2eff", _dark: "#e7e6d9ff" }}
              transition="color 0.4s ease"
            >
              <Navbar />
              {children}
              <ContactButton />
              <Footer />
            </Box>
          </ColorModeProvider>
        </ChakraProvider>
      </body>
    </html>
  );
}