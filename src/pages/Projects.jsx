import React, { useState, useEffect } from 'react';
import ProjectsHeroSection from '../sections/Projects-Hero-Section';
import ProjectOptionsSection from '../sections/Project-Options-Section';
import ProjectsSection from '../sections/Projects-Section';

export default function Projects() {
  // Changed default state from 'Featured' to 'Websites'
  const [activeCategory, setActiveCategory] = useState('Websites');
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
      className={`w-full space-y-6 transition-all duration-700 ease-out transform ${
        isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
      }`}
    >
      {/* LOWER SECTION: SIDEBAR & MAIN DISPLAY */}
      <div 
        className={`flex flex-col xl:flex-row gap-6 w-full transition-all duration-700 delay-100 ease-out transform ${
          isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
        }`}
      >
        {/* CATEGORY OPTIONS MENU */}
        <ProjectOptionsSection 
          activeCategory={activeCategory} 
          onSelectCategory={setActiveCategory} 
        />

        {/* DISPLAY CONTENT AREA */}
        <main className="flex-1 min-w-0 p-6 sm:p-8 rounded-3xl border border-gray-200 dark:border-white/10 bg-white/40 dark:bg-zinc-950/20 backdrop-blur-md shadow-sm">
          <ProjectsSection activeCategory={activeCategory} />
        </main>
      </div>

      {/* TOP HERO SECTION WITH CURVED LOOP (AT THE BOTTOM) */}
      <div 
        className={`transition-all duration-700 delay-200 ease-out transform ${
          isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
        }`}
      >
        <ProjectsHeroSection />
      </div>
    </div>
  );
}