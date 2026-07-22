import React, { useState } from 'react';
import { User, Terminal, FolderCode, Award, Camera } from 'lucide-react';

// Make sure to import your new Loader!
import Loader from './components/Loader'; 

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
  
  // We only need one simple state now to track if the app is loading
  const [isLoading, setIsLoading] = useState(true);

  const menuItems = [
    { id: 'about', label: 'About', icon: <User size={18} /> },
    { id: 'tech', label: 'Tech Stack', icon: <Terminal size={18} /> },
    { id: 'projects', label: 'Projects', icon: <FolderCode size={18} /> },
    { id: 'certificates', label: 'Certificates', icon: <Award size={18} /> },
    { id: 'gallery', label: 'Gallery', icon: <Camera size={18} /> }
  ];

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
      
      {/* 
        Mount the Loader. 
        Pass a function to onComplete that simply turns isLoading to false.
      */}
      {isLoading && <Loader onComplete={() => setIsLoading(false)} />}

      <div className="w-full max-w-none px-4 lg:px-8 xl:px-12 py-12">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 xl:gap-20">
          
          <aside className="w-full lg:w-64 xl:w-72 shrink-0">
            <div className="sticky top-12 space-y-8">
              
              <div className="hidden lg:flex items-center gap-3 px-4">
                <img 
                  src="/logos/ravenlabs.png" 
                  alt="Logo" 
                  className="w-10 h-10 object-contain dark:brightness-125"
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.parentNode.innerHTML = '<div class="w-10 h-10 rounded-full bg-blue-500/20 border border-blue-500/30 flex items-center justify-center text-blue-500 font-bold">JP</div>';
                  }}
                />
                <div>
                  <h2 className="text-sm font-black uppercase tracking-widest text-gray-900 dark:text-white">Rexshimura</h2>
                  <p className="text-[9px] font-bold text-gray-400 uppercase tracking-widest">Portfolio 2026</p>
                </div>
              </div>

              <nav className="flex lg:flex-col gap-2 overflow-x-auto lg:overflow-visible pb-4 lg:pb-0 scrollbar-hide">
                {menuItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => setActiveTab(item.id)}
                    className={`flex items-center gap-3 px-5 py-3.5 rounded-2xl transition-all duration-300 shrink-0 lg:shrink whitespace-nowrap text-sm font-bold uppercase tracking-wider ${
                      activeTab === item.id
                        ? 'bg-blue-600 text-white shadow-lg shadow-blue-500/20 translate-x-0 lg:translate-x-2'
                        : 'text-gray-500 dark:text-gray-400 hover:bg-gray-200/50 dark:hover:bg-white/5 hover:text-gray-900 dark:hover:text-white'
                    }`}
                  >
                    {item.icon}
                    {item.label}
                  </button>
                ))}
              </nav>
            </div>
          </aside>

          <main className="flex-1 min-w-0">
            {renderContent()}
          </main>
          
        </div>

        <div className="mt-20">
          <FooterSection />
        </div>
      </div>
    </div>
  );
}