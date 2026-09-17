'use client';

import { Heading } from '@chakra-ui/react';

export default function GradientHeading({ children, as = "h2", size = "xl", ...props }) {

  return (
    <Heading
      as={as}
      size={size}
      color={{ base: '#24666b', _dark: '#8dc8cc' }}
      letterSpacing="-0.035em"
      {...props}
    >
      {children}
    </Heading>
  );
}
