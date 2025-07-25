import { JetBrains_Mono, Fira_Code, Space_Mono } from 'next/font/google';

// Primary coding font - JetBrains Mono (technical, clean with coding ligatures)
export const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-jetbrains',
  weight: ['400', '500', '600', '700'],
});

// Alternative coding font - Space Mono (more distinctive/blocky)
export const spaceMono = Space_Mono({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-space-mono',
  weight: ['400', '700'],
});

// Body text font - Fira Code (slightly less blocky but still coder-like)
export const firaCode = Fira_Code({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-fira-code',
  weight: ['300', '400', '500', '600', '700'],
});