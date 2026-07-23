import React, { useState, useMemo } from 'react';
import { motion } from 'motion/react';
import { ArrowUpRight } from 'lucide-react';
import ExpandSelectedProject from './Expand-Selected-Project';
import RotatingText from '../components/RotatingText';
import { projectsData } from './Projects-Data';

const PLACEHOLDER_IMG = "/images/projects/placeholder.png";

export default function ProjectsSection({ activeCategory = 'Featured' }) {
  const [selectedProject, setSelectedProject] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Single featured project for Spotlight
  const featuredProject = useMemo(() => {
    return (
      projectsData.find((p) => p.id === 601) ||
      projectsData.find((p) => p.desc && p.desc.trim() !== '') ||
      projectsData[0]
    );
  }, []);

  // Filter project data based on activeCategory
  const currentProjects = useMemo(() => {
    if (activeCategory === 'Featured') return [featuredProject];
    return projectsData.filter((p) => p.category === activeCategory);
  }, [activeCategory, featuredProject]);

  const getCategoryIcon = (category) => {
    const baseClass = "w-5 h-5 object-contain shrink-0 drop-shadow-sm";
    switch (category) {
      case 'Featured':      return <img src="/3d/010.png" alt="Featured" className={`${baseClass} animate-pulse`} />;
      case 'Websites':      return <img src="/3d/011.png" alt="Websites" className={baseClass} />;
      case 'Integrated AI': return <img src="/3d/012.png" alt="Integrated AI" className={baseClass} />;
      case 'Mobile':        return <img src="/3d/013.png" alt="Mobile" className={baseClass} />;
      case 'Desktop':       return <img src="/3d/014.png" alt="Desktop" className={baseClass} />;
      case 'Extensions':    return <img src="/3d/015.png" alt="Extensions" className={baseClass} />;
      case 'IoT':           return <img src="/3d/016.png" alt="IoT" className={baseClass} />;
      case 'Games':         return <img src="/3d/017.png" alt="Games" className={baseClass} />;
      default:              return <img src="/3d/010.png" alt="Default" className={baseClass} />;
    }
  };

  return (
    <section className="space-y-6">
      
      {/* CATEGORY TITLE BANNER WITH ROTATING TEXT & POPPING COUNT */}
      <div className="flex items-center gap-3 h-8">
        {getCategoryIcon(activeCategory)}
        
        <h3 className="text-base font-black text-gray-900 dark:text-white uppercase tracking-wider inline-flex items-center">
          <RotatingText
            key={activeCategory}
            texts={[activeCategory]}
            splitBy="characters"
            staggerDuration={0.025}
            staggerFrom="first"
            initial={{ y: "100%", opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: "-120%", opacity: 0 }}
            transition={{ type: "spring", damping: 25, stiffness: 350 }}
            auto={false}
            animatePresenceInitial={true} 
            mainClassName="overflow-hidden py-0.5"
            splitLevelClassName="overflow-hidden"
          />
        </h3>

        <motion.span 
          key={`count-${activeCategory}`}
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ type: "spring", stiffness: 400, damping: 20, delay: 0.1 }}
          className="text-xs font-mono px-2.5 py-0.5 rounded-full bg-blue-500/10 text-blue-500 font-bold"
        >
          {currentProjects.length}
        </motion.span>
      </div>

      {/* FEATURED SPOTLIGHT DISPLAY */}
      {activeCategory === 'Featured' ? (
        featuredProject && (
          <motion.div 
            key="featured-display"
            initial={{ opacity: 0, scale: 0.95, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            onClick={() => { setSelectedProject(featuredProject); setIsModalOpen(true); }}
            className="cursor-target sfx-mini group relative w-full rounded-3xl border border-gray-200 dark:border-white/10 bg-white/80 dark:bg-zinc-900/80 p-6 sm:p-8 overflow-hidden cursor-pointer hover:border-blue-500/50 hover:shadow-2xl hover:shadow-blue-500/10 flex flex-col md:flex-row gap-6 items-center"
          >
            {/* Background Glow */}
            <div className="absolute -right-20 -top-20 w-64 h-64 bg-blue-500/10 blur-3xl rounded-full pointer-events-none group-hover:bg-blue-500/20 transition-all" />

            {/* Featured Thumbnail */}
            <div className="w-full md:w-1/2 aspect-video rounded-2xl bg-gray-100 dark:bg-zinc-800 relative overflow-hidden shrink-0 border border-gray-200/60 dark:border-white/5">
              <img 
                src={featuredProject.thumbnail || PLACEHOLDER_IMG} 
                alt={featuredProject.title} 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                onError={(e) => { e.currentTarget.src = PLACEHOLDER_IMG; }}
              />
            </div>

            {/* Featured Info */}
            <div className="flex-1 space-y-4">
              <div className="flex items-center justify-between gap-2">
                <span className="text-[9px] font-black uppercase tracking-widest px-2.5 py-1 bg-amber-500/10 text-amber-500 rounded-md">
                  Spotlight Build
                </span>
                <div className="p-2 rounded-full bg-gray-100 dark:bg-white/5 text-gray-500 group-hover:text-blue-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all">
                  <ArrowUpRight size={18} />
                </div>
              </div>

              <h3 className="text-xl sm:text-2xl font-black text-gray-900 dark:text-white tracking-tight leading-snug">
                {featuredProject.title}
              </h3>

              <p className="text-gray-500 dark:text-gray-400 text-xs sm:text-sm leading-relaxed">
                {featuredProject.desc || "A flagship system designed and built with modern architectural standards."}
              </p>

              <div className="flex flex-wrap gap-1.5 pt-2">
                {featuredProject.tags?.map((tag) => (
                  <span 
                    key={tag} 
                    className="text-[9px] font-bold uppercase tracking-wider px-2.5 py-1 bg-gray-100 dark:bg-white/5 text-gray-600 dark:text-gray-300 rounded-md"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        )
      ) : (
        /* CATEGORY GRID DISPLAY WITH MOTION STAGGERED FADE-IN */
        currentProjects.length > 0 ? (
          <div 
            key={`grid-${activeCategory}`}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5"
          >
            {currentProjects.map((p, idx) => {
              const isEmptyCard = !p.desc && (!p.tags || p.tags.length === 0);
              const cardDesc = p.desc && p.desc.trim() !== "" ? p.desc : "No Description.";

              return (
                <motion.div 
                  key={p.id}
                  initial={{ opacity: 0, y: 25 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: idx * 0.08, ease: "easeOut" }}
                  onClick={() => { setSelectedProject(p); setIsModalOpen(true); }}
                  className={`cursor-target sfx-mini rounded-3xl border bg-white dark:bg-zinc-900 overflow-hidden cursor-pointer flex flex-col justify-between transition-colors duration-300 ${
                    isEmptyCard 
                      ? 'opacity-40 dark:opacity-25 border-dashed border-gray-200 dark:border-white/10 hover:opacity-70'
                      : 'border-gray-200 dark:border-white/10 hover:border-blue-500/40 hover:shadow-xl hover:shadow-blue-500/5'
                  }`}
                >
                  <div className="w-full h-[140px] bg-gray-50 dark:bg-zinc-800/25 relative overflow-hidden flex items-center justify-center border-b border-gray-100 dark:border-white/5">
                    <img 
                      src={p.thumbnail || PLACEHOLDER_IMG} 
                      alt={p.title} 
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-105" 
                      onError={(e) => { e.currentTarget.src = PLACEHOLDER_IMG; }}
                    />
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
                        p.tags.map((tag) => (
                          <span 
                            key={tag} 
                            className="text-[8px] font-black uppercase tracking-widest px-2 py-0.5 bg-blue-500/10 text-blue-500 dark:text-blue-400 rounded-md"
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
                </motion.div>
              );
            })}
          </div>
        ) : (
          /* EMPTY STATE FALLBACK */
          <motion.div 
            key={`empty-${activeCategory}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
            className="p-8 rounded-3xl border border-dashed border-gray-200 dark:border-white/5 bg-gray-50/50 dark:bg-zinc-950/10 text-center space-y-2"
          >
            <p className="text-xs font-bold text-gray-400 dark:text-zinc-500 tracking-wide uppercase">
              No active projects cataloged under "{activeCategory}"
            </p>
          </motion.div>
        )
      )}

      {/* LIGHTBOX OVERLAY */}
      <ExpandSelectedProject 
        project={selectedProject} 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
      />
    </section>
  );
}