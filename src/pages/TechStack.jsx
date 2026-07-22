import React, { useState, useEffect } from 'react';
import TechStackSection from '../sections/TechStack-Section';
import HardwareToolsSection from '../sections/HardwareToolsSection';

export default function TechStack() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 50);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      className={`
        space-y-8
        transition-all
        duration-700
        ease-out
        transform
        ${
          isLoaded
            ? 'opacity-100 translate-y-0'
            : 'opacity-0 translate-y-6'
        }
      `}
    >

      {/* TECH STACK */}
      <div
        id="tech-stack"
        className={`
          scroll-mt-32
          transition-all
          duration-700
          delay-100
          ease-out
          transform
          ${
            isLoaded
              ? 'opacity-100 translate-y-0'
              : 'opacity-0 translate-y-6'
          }
        `}
      >
        <TechStackSection />
      </div>

      {/* HARDWARE TOOLS */}
      <div
        id="hardware-tools"
        className={`
          scroll-mt-32
          transition-all
          duration-700
          delay-200
          ease-out
          transform
          ${
            isLoaded
              ? 'opacity-100 translate-y-0'
              : 'opacity-0 translate-y-6'
          }
        `}
      >
        <HardwareToolsSection />
      </div>

    </div>
  );
}