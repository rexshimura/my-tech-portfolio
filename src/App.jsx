import React, { useState, useEffect } from 'react';
import { Sun, Moon } from 'lucide-react';

// Import background components
import ShapeGrid from './components/ShapeGrid';
import Aurora from './components/Aurora'; // Bringing the WebGL fluid shader back

// Import all section layouts
import HeroSection from './sections/Hero-Section';
import AboutSection from './sections/About-Section';
import TechStackSection from './sections/TechStack-Section';
import ExperienceSidePanel from './sections/Experience-SidePanel';
import ProjectsSection from './sections/Projects-Section';
import CertificatesSection from './sections/Certificates-Section';
import GallerySection from './sections/Gallery-Section';
import FooterSection from './sections/Footer-Section';

export default function App() {
  const [isDark, setIsDark] = useState(false); // Light mode default

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDark]);

  return (
    <div className="relative min-h-screen bg-[#fcfdfe] dark:bg-[#060608] text-gray-900 dark:text-gray-300 transition-colors duration-500 font-sans selection:bg-blue-500/30 overflow-x-hidden">
      
      {/* 🌌 IMMERSIVE BACKGROUND INTERACTIVE SWITCHER LAYER */}
      <div className="fixed inset-0 z-0 select-none transition-opacity duration-700 pointer-events-none">
        {!isDark ? (
          // LIGHT MODE: Clean moving matrix square fields
          <div className="w-full h-full opacity-70">
            <ShapeGrid 
              speed={0.4} 
              squareSize={44}
              direction="diagonal"
              borderColor="rgba(0, 0, 0, 0.04)"
              hoverFillColor="rgba(59, 130, 246, 0.05)"
              shape="square"
              hoverTrailAmount={5}
            />
          </div>
        ) : (
          // DARK MODE: Premium dynamic WebGL aurora shader canvas layer
          // Boosted opacity to 45% and blended beautifully behind the layout
          <div className="w-full h-full opacity-45 mix-blend-screen blur-[1px]">
            <Aurora
              colorStops={["#1E3A8A", "#3B82F6", "#0D9488"]} // Royal Blue, Electric Cyan, and Deep Teal
              blend={0.7}
              amplitude={1.2}
              speed={0.3} // Slightly slower, more organic fluid movement
            />
          </div>
        )}
      </div>

      {/* FLOATING THEME TOGGLE */}
      <button 
        onClick={() => setIsDark(!isDark)}
        className="fixed top-8 right-8 z-50 p-3 rounded-full bg-white/80 dark:bg-zinc-900/80 backdrop-blur-md border border-gray-200/60 dark:border-white/10 shadow-xl hover:ring-2 ring-blue-500/50 transition-all text-gray-900 dark:text-white"
        aria-label="Toggle Theme"
      >
        {isDark ? <Sun size={20} /> : <Moon size={20} />}
      </button>

      {/* FOREGROUND BODY CONTENT */}
      {/* Handled natively with clean pointer passing layout safety rules */}
      <div className="relative z-10 max-w-[1440px] mx-auto px-6 md:px-12 xl:px-16 py-16 space-y-16 pointer-events-none">
        
        <div className="pointer-events-auto">
          <HeroSection />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          <div className="lg:col-span-2 space-y-10 pointer-events-auto">
            <AboutSection />
            <TechStackSection />
          </div>
          <div className="lg:col-span-1 pointer-events-auto">
            <ExperienceSidePanel />
          </div>
        </div>

        <div className="space-y-32 pt-12">
          <div className="pointer-events-auto">
            <ProjectsSection />
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 pointer-events-auto">
            <CertificatesSection />
            <GallerySection />
          </div>
        </div>

        <div className="pointer-events-auto">
          <FooterSection />
        </div>
      </div>
    </div>
  );
}