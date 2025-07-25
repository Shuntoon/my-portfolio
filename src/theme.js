import { createSystem, defaultConfig } from '@chakra-ui/react';
import '@fontsource/open-sans'

const theme = createSystem(defaultConfig, {
  theme: {
    tokens: {
      fonts: {
        body: { value: "Open Sans, Segoe UI, Arial, sans-serif" },
        heading: { value: "Open Sans, Segoe UI, Arial, sans-serif" },
        mono: { value: "Consolas, Menlo, Monaco, monospace" }
      },
      colors: {
        gradientStart: { value: "#ff6b6b" },
        gradientEnd: { value: "#4c74f5" },
      }
    },
    components: {
      Heading: {
        variants: {
          gradient: {
            value: {
              background: "linear-gradient(135deg, #4fb1dfff 0%, #4c74f5ff 100%)",
              backgroundClip: "text",
              textFillColor: "transparent",
              color: "transparent",
            }
          }
        }
      }
    },
  }
});

export default theme;