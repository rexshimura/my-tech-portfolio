import React, { useState, useMemo } from 'react';
import { 
  FolderCode, 
  LayoutGrid, 
  List, 
  FileCode2, 
  Globe, 
  BrainCircuit, 
  Chrome, 
  Cpu, 
  Gamepad2, 
  Monitor, 
  Smartphone 
} from 'lucide-react';
import ExpandSelectedProject from './Expand-Selected-Project';
import { projectsData } from './Projects-Data';

export default function ProjectsSection({ selectedCategory, onCategoryChange, categories }) {
  const [selectedProject, setSelectedProject] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [viewMode, setViewMode] = useState('grid'); // 'grid' or 'list'

  const currentCategory = selectedCategory || categories?.[0] || 'Websites';

  // Filter projects by active category selection
  const currentProjects = useMemo(() => {
    return projectsData.filter((p) => p.category === currentCategory);
  }, [currentCategory]);

  const getCategoryIcon = (category) => {
    const iconProps = { size: 18, className: "text-blue-500 dark:text-blue-400" };
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
    <section className="space-y-8">
      {/* SECTION HEADER & CONTROLS */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-gray-100 dark:border-white/5 pb-6">
        <div className="flex items-center gap-3">
          <FolderCode size={22} className="text-blue-500" />
          <h2 className="text-xs uppercase tracking-[0.2em] font-black text-gray-400 dark:text-gray-500">
            Systems & Portfolio Directory
          </h2>
        </div>

        {/* VIEW CONFIGURATION TOGGLE */}
        <div className="flex p-1 bg-gray-100 dark:bg-zinc-900 rounded-2xl border border-gray-200/50 dark:border-white/5 self-start sm:self-auto">
          <button
            onClick={() => setViewMode('grid')}
            aria-label="View as Grid"
            className={`p-2 rounded-xl transition-all duration-300 cursor-pointer ${
              viewMode === 'grid'
                ? 'bg-white dark:bg-zinc-800 text-blue-600 dark:text-white shadow-md'
                : 'text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white'
            }`}
          >
            <LayoutGrid size={16} />
          </button>
          <button
            onClick={() => setViewMode('list')}
            aria-label="View as List"
            className={`p-2 rounded-xl transition-all duration-300 cursor-pointer ${
              viewMode === 'list'
                ? 'bg-white dark:bg-zinc-800 text-blue-600 dark:text-white shadow-md'
                : 'text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white'
            }`}
          >
            <List size={16} />
          </button>
        </div>
      </div>

      {/* MOBILE / TABLET CATEGORY SELECTOR PILLS (Hides on xl screens where App.jsx OptionWheel is active) */}
      {categories && categories.length > 0 && (
        <div className="flex xl:hidden gap-2 overflow-x-auto pb-2 scrollbar-hide">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => onCategoryChange?.(cat)}
              className={`px-4 py-2 rounded-2xl text-xs font-bold uppercase tracking-wider shrink-0 transition-all duration-300 cursor-pointer ${
                currentCategory === cat
                  ? 'bg-blue-600 text-white shadow-md shadow-blue-500/20'
                  : 'bg-gray-100 dark:bg-zinc-900 text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      )}

      {/* ACTIVE CATEGORY HEADER */}
      <div className="flex items-center gap-3">
        {getCategoryIcon(currentCategory)}
        <h3 className="text-base font-black text-gray-900 dark:text-white uppercase tracking-wider">
          {currentCategory}
        </h3>
        <span className="text-xs font-mono px-2.5 py-0.5 rounded-full bg-blue-500/10 text-blue-500 font-bold">
          {currentProjects.length}
        </span>
      </div>

      {/* PROJECT RENDER MATRIX */}
      {currentProjects.length > 0 ? (
        viewMode === 'grid' ? (
          /* GRID VIEW */
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {currentProjects.map((p) => {
              const isEmptyCard = !p.desc && (!p.tags || p.tags.length === 0);
              const cardDesc = p.desc && p.desc.trim() !== "" ? p.desc : "No Description.";

              return (
                <div 
                  key={p.id} 
                  onClick={() => { setSelectedProject(p); setIsModalOpen(true); }}
                  className={`rounded-3xl border bg-white dark:bg-zinc-900 overflow-hidden cursor-pointer transition-all duration-300 flex flex-col justify-between ${
                    isEmptyCard 
                      ? 'opacity-40 dark:opacity-25 border-dashed border-gray-200 dark:border-white/10 hover:opacity-70'
                      : 'border-gray-200 dark:border-white/10 hover:border-blue-500/40 hover:shadow-xl hover:shadow-blue-500/5'
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
          /* LIST VIEW */
          <div className="space-y-3">
            {currentProjects.map((p) => {
              const isEmptyRow = !p.desc && (!p.tags || p.tags.length === 0);

              return (
                <div
                  key={p.id}
                  onClick={() => { setSelectedProject(p); setIsModalOpen(true); }}
                  className={`w-full flex items-center justify-between gap-4 p-4 rounded-2xl border bg-white dark:bg-zinc-900 text-gray-900 dark:text-white transition-all duration-200 cursor-pointer ${
                    isEmptyRow 
                      ? 'opacity-40 dark:opacity-25 border-dashed border-gray-200 dark:border-white/5'
                      : 'border-gray-200 dark:border-white/10 hover:border-blue-500/40 hover:bg-gray-50/50 dark:hover:bg-zinc-800/30'
                  }`}
                >
                  <div className="flex items-center gap-4 min-w-0 flex-1">
                    <div className={`p-2.5 rounded-xl border shrink-0 ${
                      isEmptyRow
                        ? 'bg-gray-50 dark:bg-zinc-800/25 border-gray-200 dark:border-white/5 text-gray-400'
                        : 'bg-blue-500/5 border-blue-500/10 text-blue-500 dark:text-blue-400'
                    }`}>
                      <FileCode2 size={16} />
                    </div>
                    <h4 className="font-semibold text-sm truncate tracking-tight">
                      {p.title}
                    </h4>
                  </div>

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
        /* EMPTY FALLBACK */
        <div className="p-8 rounded-3xl border border-dashed border-gray-200 dark:border-white/5 bg-gray-50/50 dark:bg-zinc-950/10 text-center space-y-2">
          <p className="text-xs font-bold text-gray-400 dark:text-zinc-500 tracking-wide uppercase">
            No active projects cataloged under "{currentCategory}"
          </p>
        </div>
      )}

      {/* FULL SYSTEM EXPLORER LIGHTBOX OVERLAY */}
      <ExpandSelectedProject 
        project={selectedProject} 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
      />
    </section>
  );
}