import React, { useState, useEffect } from 'react';
import HeroSection from '../sections/Hero-Section';
import AboutSection from '../sections/About-Section';
import ExperienceSidePanel from '../sections/Experience-SidePanel';

export default function About() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Trigger smooth entrance animation slightly after mount
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 50);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div 
      className={`space-y-8 transition-all duration-700 ease-out transform ${
        isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
      }`}
    >
      <div className={`transition-all duration-700 delay-100 ease-out transform ${
        isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
      }`}>
        <HeroSection />
      </div>

      <div className={`grid grid-cols-1 2xl:grid-cols-2 gap-8 transition-all duration-700 delay-200 ease-out transform ${
        isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
      }`}>
        <AboutSection />
        <ExperienceSidePanel />
      </div>
    </div>
  );
}