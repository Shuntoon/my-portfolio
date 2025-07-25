'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export default function ScrollDisappear({ 
  children, 
  direction = "up", // "up", "down", "left", "right" 
  distance = 100,
  threshold = 0.5, // When to start disappearing (0-1)
  duration = 0.3, // How quickly to disappear
  ...props 
}) {
  const ref = useRef(null);
  
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });
  
  // Calculate direction values
  const getDirectionValues = () => {
    switch(direction) {
      case "up": return { x: 0, y: -distance };
      case "down": return { x: 0, y: distance };
      case "left": return { x: -distance, y: 0 };
      case "right": return { x: distance, y: 0 };
      default: return { x: 0, y: -distance };
    }
  };
  
  const { x, y } = getDirectionValues();
  
  // Transform scroll progress into opacity and position
  const opacity = useTransform(scrollYProgress, 
    [0, threshold, threshold + duration], 
    [1, 1, 0]
  );
  
  const translateX = useTransform(scrollYProgress,
    [0, threshold, threshold + duration],
    [0, 0, x]
  );
  
  const translateY = useTransform(scrollYProgress,
    [0, threshold, threshold + duration],
    [0, 0, y]
  );

  return (
    <motion.div
      ref={ref}
      style={{ 
        opacity,
        x: translateX, 
        y: translateY
      }}
      {...props}
    >
      {children}
    </motion.div>
  );
}