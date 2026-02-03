import React, { useState, useEffect } from 'react';
import { Sun, Moon } from 'lucide-react';

// Import your newly created components
import ProfileBanner from './components/Profile-Banner';
import AboutSection from './components/About-Section';
import TechStackSection from './components/TechStack-Section';
import ExperienceSidePanel from './components/Experience-SidePanel';
import ProjectsSection from './components/Projects-Section';
import CertificatesSection from './components/Certificates-Section';
import GallerySection from './components/Gallery-Section';

export default function App() {
  // Theme state: defaults to dark (true) to match your black aesthetic preference
  const [isDark, setIsDark] = useState(true);

  // Effect to toggle the 'dark' class on the HTML root element
  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDark]);

  return (
    <div className="min-h-screen bg-[#f8f9fa] dark:bg-[#0a0a0a] text-gray-900 dark:text-gray-300 transition-colors duration-300 font-sans selection:bg-blue-500/30">
      
      {/* FLOATING THEME TOGGLE */}
      <button 
        onClick={() => setIsDark(!isDark)}
        className="fixed top-6 right-6 z-50 p-3 rounded-full bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 shadow-lg hover:ring-2 ring-blue-500/50 transition-all"
        aria-label="Toggle Theme"
      >
        {isDark ? <Sun size={20} className="text-yellow-400" /> : <Moon size={20} className="text-blue-600" />}
      </button>

      <div className="max-w-6xl mx-auto px-6 py-12 space-y-12">
        
        {/* 1. TOP PROFILE SECTION */}
        <ProfileBanner />

        {/* 2. BENTO GRID LAYOUT (About, TechStack, and Experience) */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          
          {/* LEFT COLUMN: Main Content (About & TechStack) */}
          <div className="lg:col-span-2 space-y-6">
            <AboutSection />
            <TechStackSection />
          </div>

          {/* RIGHT COLUMN: Sidebar (Experience) */}
          <div className="lg:col-span-1">
            <ExperienceSidePanel />
          </div>

        </div>

        {/* 3. LOWER SECTIONS (Full Width) */}
        <div className="space-y-24 pt-12">
          <ProjectsSection />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <CertificatesSection />
            <GallerySection />
          </div>
        </div>

        {/* FOOTER */}
        <footer className="pt-20 pb-10 border-t border-gray-200 dark:border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-sm text-gray-500 font-medium">© 2026 PJ Mahilom • Built with React & Tailwind v4</p>
          <div className="flex gap-6 text-gray-400 dark:text-gray-600">
            {/* Social links can be added here */}
          </div>
        </footer>
        
      </div>
    </div>
  );
}