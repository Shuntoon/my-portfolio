'use client'

import { ClientOnly, IconButton, Skeleton, Span } from '@chakra-ui/react'
import { ThemeProvider, useTheme } from 'next-themes'

import * as React from 'react'
import { LuMoon, LuSun } from 'react-icons/lu'

export function ColorModeProvider(props) {
  return (
    <ThemeProvider attribute='class' {...props} />
  )
}

export function useColorMode() {
  const { resolvedTheme, setTheme, forcedTheme } = useTheme()
  const colorMode = forcedTheme || resolvedTheme
  const toggleColorMode = () => {
    setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')
  }
  return {
    colorMode: colorMode,
    setColorMode: setTheme,
    toggleColorMode,
  }
}

export function useColorModeValue(light, dark) {
  const { colorMode } = useColorMode()
  return colorMode === 'dark' ? dark : light
}

export function ColorModeIcon() {
  const { colorMode } = useColorMode()
  return colorMode === 'dark' ? <LuMoon /> : <LuSun />
}

export const ColorModeButton = React.forwardRef(
  function ColorModeButton(props, ref) {
    const { toggleColorMode } = useColorMode()
    return (
      <ClientOnly fallback={<Skeleton boxSize='8' />}>
        <IconButton
          onClick={toggleColorMode}
          aria-label='Toggle color mode'
          size='sm'
          ref={ref}
          bg={{ base: "rgba(255,255,255,0.18)", _dark: "rgba(0,0,0,0.22)" }}
          border="1.5px solid"
          borderColor={{ base: "rgba(255,255,255,0.35)", _dark: "rgba(255,255,255,0.12)" }}
          boxShadow={{ base: "0 2px 8px rgba(79,177,223,0.18)", _dark: "0 2px 8px rgba(44,116,245,0.22)" }}
          color={{ base: "#d89b41ff", _dark: "#49548fff" }}
          transition="all 0.2s cubic-bezier(.4,2,.3,1)"
          _hover={{
            bg: { base: "rgba(102, 176, 211, 0.18)", _dark: "rgba(76, 116, 245, 0.18)" },
            color: { base: "#f81f1fff", _dark: "#2d67e4ff" },
            boxShadow: '0 4px 16px rgba(79,177,223,0.18)',
          }}
          {...props}
          css={{
            _icon: {
              width: '5',
              height: '5',
            },
          }}
        >
          <ColorModeIcon />
        </IconButton>
      </ClientOnly>
    )
  },
)

export const LightMode = React.forwardRef(function LightMode(props, ref) {
  return (
    <Span
      color='black'
      bg='#f7fafc'
      display='contents'
      className='chakra-theme light'
      colorPalette='gray'
      colorScheme='light'
      ref={ref}
      {...props}
    />
  )
})

export const DarkMode = React.forwardRef(function DarkMode(props, ref) {
  return (
    <Span
      color='#f7fafc'
      bg='#18181b'
      display='contents'
      className='chakra-theme dark'
      colorPalette='gray'
      colorScheme='dark'
      ref={ref}
      {...props}
    />
  )
})
