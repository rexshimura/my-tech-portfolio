import React, { useState, useEffect } from 'react';
import { X, Globe, Github, Layers, Cpu, Maximize2, ZoomIn, Circle } from 'lucide-react';

export default function ExpandSelectedProject({ project, isOpen, onClose }) {
  const [mainImage, setMainImage] = useState("");
  const [isZoomed, setIsZoomed] = useState(false);

  useEffect(() => {
    if (project) {
      setMainImage(project.main_image || project.card_image);
    }
  }, [project, isOpen]);

  if (!isOpen || !project) return null;

  // Check if demo link is valid (not empty and not just a placeholder hash)
  const isDemoAvailable = project.demo_link && project.demo_link !== "#";

  return (
    <>
      {/* LIGHTBOX OVERLAY - Transparent & Blurred */}
      {isZoomed && (
        <div 
          className="fixed inset-0 z-[200] bg-black/40 backdrop-blur-3xl flex items-center justify-center p-4 cursor-zoom-out animate-in fade-in duration-300"
          onClick={() => setIsZoomed(false)}
        >
          <button className="absolute top-10 right-10 text-white/70 hover:text-white transition-all scale-100 hover:scale-110">
            <X size={48} />
          </button>
          <img 
            src={mainImage} 
            alt="Fullscreen View" 
            className="max-w-[95%] max-h-[95%] object-contain rounded-2xl shadow-2xl animate-in zoom-in-95 duration-500"
          />
        </div>
      )}

      {/* MAIN MODAL */}
      <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-10">
        {/* Backdrop - Transparent Glass */}
        <div 
          className="absolute inset-0 bg-white/10 dark:bg-black/20 backdrop-blur-2xl transition-opacity animate-in fade-in duration-500" 
          onClick={onClose} 
        />

        {/* Modal Container - Glassmorphism Styling */}
        <div className="relative w-full max-w-6xl max-h-[90vh] overflow-y-auto rounded-[40px] border border-white/20 dark:border-white/10 bg-white/70 dark:bg-zinc-950/70 backdrop-blur-md shadow-2xl custom-scrollbar animate-in fade-in zoom-in-95 duration-500">
          
          {/* Close Button */}
          <button 
            onClick={onClose}
            className="absolute right-8 top-8 z-50 p-4 rounded-full bg-white/50 dark:bg-zinc-900/50 backdrop-blur-md border border-white/20 text-gray-800 dark:text-white hover:text-red-500 transition-all active:scale-90"
          >
            <X size={24} strokeWidth={3} />
          </button>

          <div className="flex flex-col-reverse lg:flex-row min-h-full">
            
            {/* LEFT SIDE: Content */}
            <div className="lg:w-[40%] p-8 lg:p-12 border-t lg:border-t-0 lg:border-r border-white/10">
              <div className="space-y-8 mt-12 lg:mt-0">
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white leading-tight">
                  {project.title}
                </h2>
                
                <div className="flex flex-wrap gap-2">
                  {project.tags.map(tag => (
                    <span key={tag} className="text-[10px] font-bold uppercase px-3 py-1 bg-white/50 dark:bg-white/10 rounded-lg border border-white/20 text-gray-600 dark:text-gray-300">
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="space-y-3">
                  <h4 className="text-[11px] font-black text-blue-600 uppercase tracking-widest flex items-center gap-2">
                    <Cpu size={16} /> System Logic
                  </h4>
                  <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                    {project.desc}
                  </p>
                </div>

                <div className="space-y-4 pt-6 border-t border-white/10">
                  <h4 className="text-[11px] font-black text-gray-400 uppercase tracking-widest flex items-center gap-2">
                    <Layers size={16} /> Core Stack
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {project.core_technologies?.map(tech => (
                      <span key={tech} className="text-[10px] font-semibold text-gray-700 dark:text-gray-200 px-3 py-1 bg-white/40 dark:bg-white/5 rounded-md border border-white/10">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex gap-4 pt-12">
                {/* CONDITIONAL DEMO BUTTON */}
                {isDemoAvailable && (
                  <a 
                    href={project.demo_link} 
                    target="_blank" 
                    rel="noreferrer"
                    className="flex-1 py-4 rounded-2xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs uppercase tracking-widest transition-all flex items-center justify-center gap-2 shadow-lg shadow-blue-500/20 active:scale-95"
                  >
                    <Globe size={18} /> Live Demo
                  </a>
                )}
                
                <a 
                  href={project.github_link} 
                  target="_blank" 
                  rel="noreferrer"
                  className={`py-4 rounded-2xl border border-white/20 text-gray-600 dark:text-gray-300 flex items-center justify-center hover:bg-white/10 transition-all active:scale-95 ${isDemoAvailable ? 'px-8' : 'flex-1'}`}
                >
                  <Github size={22} className={isDemoAvailable ? "" : "mr-2"} />
                  {!isDemoAvailable && "Source Code"}
                </a>
              </div>
            </div>

            {/* RIGHT SIDE: Interactive Gallery */}
            <div className="lg:w-[60%] p-6 lg:p-10 space-y-6">
              <div 
                className="relative rounded-[32px] overflow-hidden border border-white/10 aspect-video group cursor-zoom-in shadow-2xl bg-zinc-900/20"
                onClick={() => setIsZoomed(true)}
              >
                <img 
                  key={mainImage}
                  src={mainImage} 
                  className="w-full h-full object-cover transition-all duration-700 animate-in fade-in" 
                  alt="Primary View" 
                />
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <div className="bg-white/20 backdrop-blur-md p-4 rounded-full border border-white/30">
                    <ZoomIn className="text-white" size={32} />
                  </div>
                </div>
                <div className="absolute bottom-6 left-6">
                  <span className="bg-black/60 backdrop-blur-xl text-white text-[10px] font-mono tracking-widest uppercase px-4 py-2 rounded-full border border-white/10 flex items-center gap-2">
                    <Maximize2 size={14} /> Click to Enlarge
                  </span>
                </div>
              </div>
              
              <div className="grid grid-cols-4 gap-4">
                {[project.main_image || project.card_image, project.image_01, project.image_02, project.image_03].map((img, i) => (
                  <button 
                    key={i} 
                    onClick={() => img && setMainImage(img)}
                    className={`relative rounded-2xl overflow-hidden aspect-video border-2 transition-all duration-300 bg-zinc-900/50 ${
                      mainImage === img 
                        ? "border-blue-500 scale-95 shadow-lg shadow-blue-500/20" 
                        : "border-transparent opacity-50 hover:opacity-100 hover:border-blue-500/50"
                    } ${!img && "hidden"}`}
                  >
                     {img && <img src={img} className="w-full h-full object-cover" alt="thumbnail" />}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}