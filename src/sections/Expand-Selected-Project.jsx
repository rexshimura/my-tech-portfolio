import React, { useState, useEffect } from 'react';
import { X, Globe, Github, ZoomIn, EyeOff, Play, ArrowLeft } from 'lucide-react';

export default function ExpandSelectedProject({ project, isOpen, onClose }) {
  // Main modal panel animation hooks
  const [shouldRender, setShouldRender] = useState(isOpen);
  const [animate, setAnimate] = useState(false);

  // 🔄 VIEW STATE ROUTER: null means standard details view, a string URL means full asset view
  const [fullscreenMedia, setFullscreenMedia] = useState(null);
  
  // Inner View Swapping Animation States
  const [showMediaView, setShowMediaView] = useState(false);
  const [mediaAnimate, setMediaAnimate] = useState(false);

  // Orchestrate main overlay panel entry/exit timelines
  useEffect(() => {
    if (isOpen) {
      setShouldRender(true);
      const timer = setTimeout(() => setAnimate(true), 10);
      return () => clearTimeout(timer);
    } else {
      setAnimate(false);
      const timer = setTimeout(() => setShouldRender(false), 300);
      const resetTimer = setTimeout(() => {
        setFullscreenMedia(null);
        setShowMediaView(false);
        setMediaAnimate(false);
      }, 350);
      return () => {
        clearTimeout(timer);
        clearTimeout(resetTimer);
      };
    }
  }, [isOpen]);

  // Orchestrate nested smooth transition sequences when toggling view modes
  useEffect(() => {
    if (fullscreenMedia) {
      setShowMediaView(true);
      const timer = setTimeout(() => setMediaAnimate(true), 20);
      return () => clearTimeout(timer);
    } else {
      setMediaAnimate(false);
      const timer = setTimeout(() => setShowMediaView(false), 250);
      return () => clearTimeout(timer);
    }
  }, [fullscreenMedia]);

  if (!shouldRender || !project) return null;

  const hasDemo = project.demo_link && project.demo_link !== "#" && project.demo_link.trim() !== "";
  const hasCode = project.github_link && project.github_link !== "#" && project.github_link.trim() !== "";
  const modalDesc = project.desc && project.desc.trim() !== "" ? project.desc : "No Description.";

  const isVideoFile = (url) => {
    if (!url) return false;
    return /\.(mp4|webm|ogg)$/i.test(url);
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 md:p-8">
      
      {/* Transparent Glass Backdrop Mask */}
      <div 
        className={`absolute inset-0 bg-white/10 dark:bg-black/40 backdrop-blur-2xl transition-opacity duration-300 ease-in-out ${
          animate ? 'opacity-100' : 'opacity-0'
        }`}
        onClick={onClose} 
      />

      {/* Main Container Sheet Panel */}
      <div 
        className={`relative w-full max-w-4xl h-[75vh] min-h-[460px] overflow-hidden rounded-[28px] border border-white/20 dark:border-white/10 bg-white/95 dark:bg-zinc-950/95 shadow-2xl transition-all duration-300 ease-in-out transform ${
          animate 
            ? 'translate-y-0 scale-100 opacity-100' 
            : 'translate-y-6 scale-95 opacity-0'
        }`}
      >
        
        {/* =========================================================================
            STATE A: FULL ASSET IMMERSIVE PREVIEW MODE (WITH TRANSITIONAL SLIDE & FADE)
            ========================================================================= */}
        {showMediaView && (
          <div 
            className={`absolute inset-0 w-full h-full flex flex-col p-5 sm:p-8 bg-white/95 dark:bg-zinc-950/95 z-40 transition-all duration-300 ease-in-out transform ${
              mediaAnimate 
                ? 'opacity-100 scale-100 translate-y-0' 
                : 'opacity-0 scale-98 translate-y-3 pointer-events-none'
            }`}
          >
            {/* Immersive Controls Header Row */}
            <div className="flex items-center justify-between pb-3 border-b border-gray-100 dark:border-white/5 shrink-0">
              <button 
                onClick={() => setFullscreenMedia(null)}
                className="flex items-center gap-1.5 px-3 py-1.5 text-[10px] font-bold uppercase tracking-wider text-gray-500 dark:text-gray-400 hover:text-blue-500 dark:hover:text-white transition-colors bg-gray-100 dark:bg-zinc-900 rounded-lg cursor-pointer"
              >
                <ArrowLeft size={12} strokeWidth={2.5} /> Back to Specs
              </button>
              
              <button 
                onClick={() => setFullscreenMedia(null)}
                className="p-2 rounded-full bg-gray-100 dark:bg-zinc-900 text-gray-500 dark:text-gray-400 hover:text-red-500 transition-colors cursor-pointer"
                aria-label="Exit Full View"
              >
                <X size={14} strokeWidth={2.5} />
              </button>
            </div>

            {/* Seamless Fluid Framework Viewport Asset Deck */}
            <div className="flex-1 w-full bg-transparent flex items-center justify-center overflow-hidden pt-4">
              {isVideoFile(fullscreenMedia) ? (
                <video 
                  src={fullscreenMedia} 
                  controls 
                  autoPlay 
                  className="max-w-full max-h-full rounded-xl shadow-xl border border-gray-100 dark:border-white/5 object-contain" 
                />
              ) : (
                <img 
                  src={fullscreenMedia} 
                  alt="Full viewport display layout stream" 
                  className="max-w-full max-h-full rounded-xl shadow-xl border border-gray-100 dark:border-white/5 object-contain select-none" 
                />
              )}
            </div>
          </div>
        )}
        
        {/* =========================================================================
            STATE B: STANDARD DUAL-COLUMN SYSTEM DOCUMENTATION VIEW
            ========================================================================= */}
        <div 
          className={`w-full h-full overflow-y-auto p-5 sm:p-8 space-y-6 custom-scrollbar transition-all duration-300 ease-in-out ${
            mediaAnimate ? 'opacity-0 scale-98 pointer-events-none' : 'opacity-100 scale-100'
          }`}
        >
          
          {/* Top Sheet Exit Toggle */}
          <button 
            onClick={onClose}
            className="absolute right-5 top-5 z-30 p-2.5 rounded-full bg-gray-100 dark:bg-zinc-900 text-gray-800 dark:text-white hover:text-red-500 transition-colors active:scale-90 cursor-pointer"
          >
            <X size={18} strokeWidth={2.5} />
          </button>

          {/* SECTION 1: CORE SUMMARY ROW */}
          <div className="flex flex-col md:flex-row gap-6 items-start pt-2">
            <div className="w-full md:w-[260px] aspect-video rounded-xl bg-gray-100 dark:bg-zinc-900 border border-gray-200 dark:border-white/5 flex items-center justify-center overflow-hidden shrink-0">
              {project.thumbnail && project.thumbnail.trim() !== "" ? (
                <img src={project.thumbnail} alt={project.title} className="w-full h-full object-cover" />
              ) : (
                <span className="text-[9px] font-mono tracking-wider text-gray-400 dark:text-zinc-600 uppercase">
                  No Thumbnail
                </span>
              )}
            </div>

            <div className="space-y-2.5 flex-1">
              <div className="space-y-0.5">
                <span className="text-[9px] font-bold text-blue-500 uppercase tracking-widest">
                  {project.category}
                </span>
                <h2 className="text-xl font-black text-gray-900 dark:text-white tracking-tight leading-tight">
                  {project.title}
                </h2>
              </div>
              
              <p className="text-gray-500 dark:text-gray-400 text-xs leading-relaxed font-medium max-w-2xl">
                {modalDesc}
              </p>

              <div className="flex flex-wrap gap-1 pt-1">
                {project.tags && project.tags.length > 0 ? (
                  project.tags.map(tag => (
                    <span key={tag} className="text-[8px] font-bold uppercase tracking-wider px-2 py-0.5 bg-gray-100 dark:bg-white/5 text-gray-600 dark:text-gray-300 rounded-md">
                      {tag}
                    </span>
                  ))
                ) : (
                  <span className="text-[8px] font-bold uppercase tracking-wider px-2 py-0.5 bg-gray-50 dark:bg-white/5 text-gray-400 dark:text-zinc-500 rounded-md border border-dashed border-gray-200 dark:border-white/10">
                    None
                  </span>
                )}
              </div>
            </div>
          </div>

          {/* SECTION 2: GRID GALLERY (CLICKS MODULATE IMMERSIVE INTERACTION STATE) */}
          <div className="space-y-2 pt-3 border-t border-gray-100 dark:border-white/5">
            <h3 className="text-[9px] font-black uppercase tracking-widest text-gray-400 dark:text-zinc-500">
              Supporting Media Assets (6 Screens/Videos)
            </h3>
            
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {Array.from({ length: 6 }).map((_, idx) => {
                const mediaUrl = project.supporting_images?.[idx];
                const hasValidMedia = mediaUrl && mediaUrl.trim() !== "";
                const isVideo = isVideoFile(mediaUrl);
                
                return (
                  <div 
                    key={idx}
                    onClick={() => hasValidMedia && setFullscreenMedia(mediaUrl)}
                    className={`aspect-video rounded-lg bg-gray-50 dark:bg-zinc-900/40 border border-gray-200/60 dark:border-white/5 overflow-hidden flex items-center justify-center relative group select-none ${
                      hasValidMedia ? 'cursor-zoom-in hover:border-blue-500/30' : 'cursor-default'
                    } transition-all duration-200`}
                  >
                    {hasValidMedia ? (
                      isVideo ? (
                        <>
                          <video src={mediaUrl} muted className="w-full h-full object-cover" />
                          <div className="absolute inset-0 bg-black/30 transition-opacity flex items-center justify-center">
                            <div className="bg-blue-600 p-2 rounded-full text-white shadow-md group-hover:scale-110 transition-transform duration-300">
                              <Play size={14} fill="currentColor" />
                            </div>
                          </div>
                        </>
                      ) : (
                        <>
                          <img src={mediaUrl} className="w-full h-full object-cover" alt={`Supporting snapshot ${idx + 1}`} />
                          <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center duration-200">
                            <div className="bg-white/20 backdrop-blur-md p-1.5 rounded-full border border-white/30 text-white">
                              <ZoomIn size={14} />
                            </div>
                          </div>
                        </>
                      )
                    ) : (
                      <div className="text-center p-1.5 flex flex-col items-center gap-0.5 text-gray-300 dark:text-zinc-700">
                        <EyeOff size={12} className="opacity-60" />
                        <span className="text-[8px] font-mono uppercase tracking-wider">Empty Slot</span>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          {/* SECTION 3: SYSTEM ACTION PANEL HUB */}
          <div className="flex flex-col sm:flex-row gap-3 pt-4 border-t border-gray-100 dark:border-white/5">
            {hasDemo ? (
              <a 
                href={project.demo_link} 
                target="_blank" 
                rel="noreferrer"
                className="flex-1 py-2.5 rounded-lg bg-blue-600 hover:bg-blue-500 text-white font-bold text-[11px] uppercase tracking-widest transition-colors flex items-center justify-center gap-1.5 shadow-lg shadow-blue-500/10 active:scale-98"
              >
                <Globe size={14} /> Test Live Demo
              </a>
            ) : (
              <div className="flex-1 py-2.5 rounded-lg border border-dashed border-gray-200 dark:border-white/5 text-gray-400 dark:text-zinc-600 font-bold text-[11px] uppercase tracking-widest text-center select-none bg-gray-50/50 dark:bg-transparent">
                Live Demo Unavailable
              </div>
            )}
            
            {hasCode ? (
              <a 
                href={project.github_link} 
                target="_blank" 
                rel="noreferrer"
                className="py-2.5 px-6 rounded-lg border border-gray-200 dark:border-white/10 text-gray-700 dark:text-gray-300 font-bold text-[11px] uppercase tracking-widest hover:bg-gray-50 dark:hover:bg-white/5 transition-colors flex items-center justify-center gap-1.5 active:scale-98"
              >
                <Github size={14} /> Source Repository
              </a>
            ) : (
              <div className="py-2.5 px-6 rounded-lg border border-dashed border-gray-200 dark:border-white/5 text-gray-400 dark:text-zinc-600 font-bold text-[11px] uppercase tracking-widest text-center select-none bg-gray-50/50 dark:bg-transparent">
                Private Source
              </div>
            )}
          </div>

        </div>

      </div>
    </div>
  );
}