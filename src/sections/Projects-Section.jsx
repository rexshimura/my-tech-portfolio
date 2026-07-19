import React, { useState, useMemo } from 'react';
import { 
  FolderCode, 
  ArrowRight, 
  LayoutGrid, 
  List, 
  FileCode2, 
  Globe, 
  BrainCircuit, 
  Smartphone, 
  Monitor, 
  Chrome, 
  Cpu, 
  Gamepad2 
} from 'lucide-react';
import ExpandSelectedProject from './Expand-Selected-Project';
import { projectsData } from './Projects-Data';

export default function ProjectsSection() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  // Custom Controls State
  const [activeTab, setActiveTab] = useState('main'); // 'main' or 'side'
  const [viewMode, setViewMode] = useState('carousel'); // 'carousel' or 'row'

  // Category Routing Mapping Specifications
  const mainCategories = ['Websites', 'Integrated AI', 'Mobile', 'Desktop'];
  const sideCategories = ['Extensions', 'IoT', 'Games'];

  const activeCategories = useMemo(() => {
    return activeTab === 'main' ? mainCategories : sideCategories;
  }, [activeTab]);

  const groupedProjects = useMemo(() => {
    const groups = {};
    activeCategories.forEach(cat => {
      groups[cat] = projectsData.filter(p => p.category === cat);
    });
    return groups;
  }, [projectsData, activeCategories]);

  // Dynamic Icon Mapping Object for Category Headers
  const getCategoryIcon = (category) => {
    const iconProps = { size: 16, className: "text-blue-500 dark:text-blue-400" };
    switch (category) {
      case 'Websites':      return <Globe {...iconProps} />;
      case 'Integrated AI': return <BrainCircuit {...iconProps} />;
      case 'Mobile':        return <Smartphone {...iconProps} />;
      case 'Desktop':       return <Monitor {...iconProps} />;
      case 'Extensions':    return <Chrome {...iconProps} />;
      case 'IoT':           return <Cpu {...iconProps} />;
      case 'Games':         return <Gamepad2 {...iconProps} />;
      default:              return <FileCode2 {...iconProps} />;
    }
  };

  return (
    <section className="space-y-12">
      {/* Dynamic Style Injection for Dark Mode Compatible Thinner Scrollbars */}
      <style dangerouslySetInnerHTML={{__html: `
        .portfolio-track-scrollbar::-webkit-scrollbar {
          height: 4px; /* Thinner scrollbar track */
        }
        .portfolio-track-scrollbar::-webkit-scrollbar-track {
          background: rgba(0, 0, 0, 0.02);
          border-radius: 10px;
        }
        .dark .portfolio-track-scrollbar::-webkit-scrollbar-track {
          background: rgba(255, 255, 255, 0.02);
        }
        .portfolio-track-scrollbar::-webkit-scrollbar-thumb {
          background: rgba(0, 0, 0, 0.1);
          border-radius: 10px;
          transition: background 0.2s;
        }
        .portfolio-track-scrollbar::-webkit-scrollbar-thumb:hover {
          background: rgba(0, 0, 0, 0.2);
        }
        .dark .portfolio-track-scrollbar::-webkit-scrollbar-thumb {
          background: rgba(255, 255, 255, 0.1);
        }
        .dark .portfolio-track-scrollbar::-webkit-scrollbar-thumb:hover {
          background: rgba(255, 255, 255, 0.2);
        }
      `}} />

      {/* SECTION MASTER CONTROL PANEL */}
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 border-b border-gray-100 dark:border-white/5 pb-6">
        
        {/* Left Side Identity Text */}
        <div className="flex items-center gap-3">
          <FolderCode size={22} className="text-blue-500" />
          <h2 className="text-xs uppercase tracking-[0.2em] font-black text-gray-400 dark:text-gray-500">
            Systems & Development
          </h2>
        </div>

        {/* Right Side Controls Wrapper */}
        <div className="flex flex-wrap items-center gap-4">
          
          {/* CONTROL A: TAB SELECTION SWITCHER */}
          <div className="flex p-1 bg-gray-100 dark:bg-zinc-900 rounded-2xl border border-gray-200/50 dark:border-white/5">
            <button
              onClick={() => setActiveTab('main')}
              className={`px-4 py-2 text-xs font-bold uppercase tracking-wider rounded-xl transition-all duration-300 cursor-pointer ${
                activeTab === 'main'
                  ? 'bg-white dark:bg-zinc-800 text-blue-600 dark:text-white shadow-md'
                  : 'text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white'
              }`}
            >
              Main Projects
            </button>
            <button
              onClick={() => setActiveTab('side')}
              className={`px-4 py-2 text-xs font-bold uppercase tracking-wider rounded-xl transition-all duration-300 cursor-pointer ${
                activeTab === 'side'
                  ? 'bg-white dark:bg-zinc-800 text-blue-600 dark:text-white shadow-md'
                  : 'text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white'
              }`}
            >
              Side Projects
            </button>
          </div>

          {/* CONTROL B: VIEW CONFIGURATION MODE TOGGLE */}
          <div className="flex p-1 bg-gray-100 dark:bg-zinc-900 rounded-2xl border border-gray-200/50 dark:border-white/5">
            <button
              onClick={() => setViewMode('carousel')}
              aria-label="View as Carousel"
              className={`p-2 rounded-xl transition-all duration-300 cursor-pointer ${
                viewMode === 'carousel'
                  ? 'bg-white dark:bg-zinc-800 text-blue-600 dark:text-white shadow-md'
                  : 'text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white'
              }`}
            >
              <LayoutGrid size={16} />
            </button>
            <button
              onClick={() => setViewMode('row')}
              aria-label="View as Rows"
              className={`p-2 rounded-xl transition-all duration-300 cursor-pointer ${
                viewMode === 'row'
                  ? 'bg-white dark:bg-zinc-800 text-blue-600 dark:text-white shadow-md'
                  : 'text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white'
              }`}
            >
              <List size={16} />
            </button>
          </div>

        </div>
      </div>

      {/* COMPONENT INTERACTIVE CONTENT MATRIX */}
      <div className="space-y-12 animate-in fade-in duration-300">
        {activeCategories.map((category) => {
          const targetedProjects = groupedProjects[category] || [];

          return (
            <div key={category} className="space-y-4 group/row">
              
              {/* Category Track Title Section with Integrated System Icons */}
              <div className="flex items-center justify-between px-2">
                <div className="flex items-center gap-2.5">
                  {getCategoryIcon(category)}
                  <h3 className="text-xs font-bold text-gray-800 dark:text-gray-200 uppercase tracking-widest">
                    {category}
                  </h3>
                </div>
                {viewMode === 'carousel' && targetedProjects.length > 2 && (
                  <span className="text-[10px] uppercase font-bold tracking-wider text-gray-400 dark:text-zinc-500 flex items-center gap-1 opacity-0 group-hover/row:opacity-100 transition-opacity duration-300">
                    Swipe Horizontal <ArrowRight size={12} />
                  </span>
                )}
              </div>

              {/* ROUTE VIEW CONFIGURATIONS */}
              {targetedProjects.length > 0 ? (
                viewMode === 'carousel' ? (
                  
                  /* ==================================================
                     MODE A: CAROUSEL TRACK
                     ================================================== */
                  <div className="w-full overflow-x-auto pb-6 pt-2 portfolio-track-scrollbar flex gap-6 scroll-smooth snap-x snap-mandatory px-2">
                    {targetedProjects.map((p) => {
                      const isEmptyCard = !p.desc && (!p.tags || p.tags.length === 0);
                      const cardDesc = p.desc.trim() !== "" ? p.desc : "No Description.";

                      return (
                        <div 
                          key={p.id} 
                          onClick={() => { setSelectedProject(p); setIsModalOpen(true); }}
                          className={`snap-start shrink-0 w-[290px] sm:w-[320px] rounded-3xl border bg-white dark:bg-zinc-900 overflow-hidden cursor-pointer transition-all duration-300 flex flex-col justify-between ${
                            isEmptyCard 
                              ? 'opacity-35 dark:opacity-25 border-dashed border-gray-200 dark:border-white/10 hover:opacity-60 hover:bg-gray-50/40 dark:hover:bg-zinc-800/20'
                              : 'border-gray-200 dark:border-white/10 hover:border-blue-500/40 hover:bg-gray-50/50 dark:hover:bg-zinc-800/30 hover:shadow-xl hover:shadow-blue-500/5'
                          }`}
                        >
                          <div className="w-full h-[140px] bg-gray-50 dark:bg-zinc-800/25 relative overflow-hidden flex items-center justify-center border-b border-gray-100 dark:border-white/5">
                            {p.thumbnail ? (
                              <img src={p.thumbnail} alt={p.title} className="w-full h-full object-cover" />
                            ) : (
                              <span className="text-[9px] font-mono tracking-wider text-gray-400 dark:text-zinc-600 uppercase">
                                {isEmptyCard ? "Pipeline Empty" : "No Preview"}
                              </span>
                            )}
                          </div>

                          <div className="p-5 flex-1 flex flex-col justify-between gap-4">
                            <div className="space-y-1.5">
                              <h4 className="font-bold text-sm text-gray-900 dark:text-white line-clamp-1">
                                {p.title}
                              </h4>
                              <p className="text-gray-500 dark:text-gray-400 text-xs leading-relaxed line-clamp-2">
                                {cardDesc}
                              </p>
                            </div>
                            <div className="flex flex-wrap gap-1">
                              {p.tags && p.tags.length > 0 ? (
                                p.tags.map(tag => (
                                  <span key={tag} className="text-[8px] font-black uppercase tracking-widest px-2 py-0.5 bg-blue-500/10 text-blue-500 dark:text-blue-400 rounded-md">
                                    {tag}
                                  </span>
                                ))
                              ) : (
                                <span className="text-[8px] font-bold uppercase tracking-widest px-2 py-0.5 bg-gray-100 dark:bg-white/5 text-gray-400 dark:text-zinc-500 rounded-md border border-gray-200/50 dark:border-white/5">
                                  None
                                </span>
                              )}
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                ) : (
                  
                  /* ==================================================
                     MODE B: ROWS WITH TAGS ON THE RIGHT
                     ================================================== */
                  <div className="w-full space-y-2 px-2 pt-1">
                    {targetedProjects.map((p) => {
                      const isEmptyRow = !p.desc && (!p.tags || p.tags.length === 0);
                      
                      return (
                        <div
                          key={p.id}
                          onClick={() => { setSelectedProject(p); setIsModalOpen(true); }}
                          className={`w-full flex items-center justify-between gap-4 p-4 rounded-2xl border bg-white dark:bg-zinc-900 text-gray-900 dark:text-white transition-all duration-200 cursor-pointer ${
                            isEmptyRow 
                              ? 'opacity-35 dark:opacity-25 border-dashed border-gray-200 dark:border-white/5 hover:opacity-60 hover:bg-gray-50/40 dark:hover:bg-zinc-800/20'
                              : 'border-gray-200 dark:border-white/10 hover:border-blue-500/40 hover:bg-gray-50/50 dark:hover:bg-zinc-800/30'
                          }`}
                        >
                          {/* Left Elements Wrapper */}
                          <div className="flex items-center gap-4 min-w-0 flex-1">
                            {/* Icon block */}
                            <div className={`p-2.5 rounded-xl border shrink-0 ${
                              isEmptyRow
                                ? 'bg-gray-50 dark:bg-zinc-800/25 border-gray-200 dark:border-white/5 text-gray-400'
                                : 'bg-blue-500/5 border-blue-500/10 text-blue-500 dark:text-blue-400'
                            }`}>
                              <FileCode2 size={16} />
                            </div>

                            {/* Project Title text */}
                            <h4 className="font-semibold text-sm truncate tracking-tight">
                              {p.title}
                            </h4>
                          </div>

                          {/* Far Right Element Stack (Tags / Status Flags) */}
                          <div className="flex items-center gap-1.5 shrink-0 ml-4">
                            {p.tags && p.tags.length > 0 ? (
                              p.tags.map(tag => (
                                <span 
                                  key={tag} 
                                  className="hidden sm:inline-block text-[8px] font-black uppercase tracking-widest px-2 py-0.5 bg-blue-500/10 text-blue-500 dark:text-blue-400 rounded-md"
                                >
                                  {tag}
                                </span>
                              ))
                            ) : (
                              <span className="text-[8px] font-bold uppercase tracking-widest px-2 py-0.5 bg-gray-100 dark:bg-white/5 text-gray-400 dark:text-zinc-500 rounded-md border border-gray-200/50 dark:border-white/5">
                                None
                              </span>
                            )}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                )
              ) : (
                /* Empty Track Placeholder Layout Fallback */
                <div className="mx-2 p-5 rounded-2xl border border-dashed border-gray-200 dark:border-white/5 bg-gray-50/50 dark:bg-zinc-950/10">
                  <p className="text-[11px] font-medium text-gray-400 dark:text-zinc-500 tracking-wide">
                    No active setups currently cataloged under "{category}".
                  </p>
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* FULL SYSTEM EXPLORER EXTENDED LIGHTBOX OVERLAY */}
      <ExpandSelectedProject 
        project={selectedProject} 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
      />
    </section>
  );
}