import { createSystem, defaultConfig } from '@chakra-ui/react';
import '@fontsource/jetbrains-mono';
import '@fontsource/montserrat';

const theme = createSystem(defaultConfig, {
  theme: {
    tokens: {
      fonts: {
        body: { value: "Jetbrains Mono, Segoe UI, Arial, sans-serif" },
        heading: { value: "Montserrat, Segoe UI, Arial, sans-serif" },
        mono: { value: "JetBrains Mono, Consolas, Menlo, Monaco, monospace" }
      },
      radii: {
        sm: { value: "2px" },
        md: { value: "3px" },
        lg: { value: "4px" },
        xl: { value: "5px" },
        '2xl': { value: "6px" },
        '3xl': { value: "8px" },
      },
      colors: {
        gradientStart: { value: "#ff6b6b" },
        gradientEnd: { value: "#4c74f5" },
      }
    },
    recipes: {
      button: {
        base: { borderRadius: "md" },
      },
    },
  }
});

export default theme;
