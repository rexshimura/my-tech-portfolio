import React, { useState } from 'react';

// --- Components ---
import Loader from './components/Loader'; 
import Sidebar from './components/Sidebar';
import ShapeGrid from './components/ShapeGrid'; 
import TargetCursor from './components/TargetCursor';
import Cursor from './components/Cursor'; // Hachiware custom cursor injector

// --- Sections ---
import HeroSection from './sections/Hero-Section';
import AboutSection from './sections/About-Section';
import ExperienceSidePanel from './sections/Experience-SidePanel';
import TechStackSection from './sections/TechStack-Section';
import ProjectsSection from './sections/Projects-Section';
import CertificatesSection from './sections/Certificates-Section';
import GallerySection from './sections/Gallery-Section';
import FooterSection from './sections/Footer-Section';

export default function App() {
  const [activeTab, setActiveTab] = useState('about');
  const [isLoading, setIsLoading] = useState(true);

  const renderContent = () => {
    switch (activeTab) {
      case 'about':
        return (
          <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
            <HeroSection />
            <div className="grid grid-cols-1 2xl:grid-cols-2 gap-8">
              <AboutSection />
              <ExperienceSidePanel />
            </div>
          </div>
        );
      case 'tech':
        return (
          <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
            <TechStackSection />
          </div>
        );
      case 'projects':
        return (
          <div className="p-8 rounded-3xl border border-gray-200 dark:border-white/10 bg-white/40 dark:bg-zinc-950/20 backdrop-blur-md shadow-sm animate-in fade-in slide-in-from-bottom-4 duration-500">
            <ProjectsSection />
          </div>
        );
      case 'certificates':
        return (
          <div className="p-8 rounded-3xl border border-gray-200 dark:border-white/10 bg-white/40 dark:bg-zinc-950/20 backdrop-blur-md shadow-sm animate-in fade-in slide-in-from-bottom-4 duration-500">
            <CertificatesSection />
          </div>
        );
      case 'gallery':
        return (
          <div className="p-8 rounded-3xl border border-gray-200 dark:border-white/10 bg-white/40 dark:bg-zinc-950/20 backdrop-blur-md shadow-sm animate-in fade-in slide-in-from-bottom-4 duration-500">
            <GallerySection />
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-zinc-950 text-gray-900 dark:text-gray-100 font-sans selection:bg-blue-500/30 relative">
      
      {/* 1. INITIAL LOADER */}
      {isLoading && <Loader onComplete={() => setIsLoading(false)} />}

      {/* 2. HACHIWARE CUSTOM CURSOR (Injects CDN stylesheet) */}
      <Cursor />

      {/* 3. TARGET CURSOR (hideDefaultCursor set to false to keep Hachiware visible) */}
      <TargetCursor 
        targetSelector="button, a, .cursor-target" 
        cursorColor="#9ca3af" 
        cursorColorOnTarget="#3B82F6" 
        spinDuration={2}
        hideDefaultCursor={false}
      />

      {/* 4. BACKGROUND CANVAS */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <ShapeGrid shape="square" direction="diagonal" speed={0.5} />
      </div>

      {/* 5. MAIN CONTENT WRAPPER */}
      <div className="relative z-10 w-full max-w-[1320px] mx-auto px-4 lg:px-8 xl:px-12 py-12">
        <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />

        <main className="w-full min-w-0 mt-8">
          {renderContent()}
        </main>

        <div className="mt-20">
          <FooterSection />
        </div>
      </div>
    </div>
  );
}