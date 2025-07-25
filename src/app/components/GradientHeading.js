'use client';

import { useEffect, useRef, useState } from 'react';
import { Heading } from '@chakra-ui/react';

export default function GradientHeading({ children, as = "h2", size = "xl", ...props }) {

  return (
    <Heading
      as={as}
      size={size}
      background={`linear-gradient(110deg, #a0a1b1ee 30%, #2a9296ef 80%)`}
      backgroundClip="text"
      textColor="transparent"
      transition="background 0.3s"
      {...props}
    >
      {children}
    </Heading>
  );
}