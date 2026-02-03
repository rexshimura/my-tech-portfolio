import React from 'react';
import { X, Globe, Github, Layers, Cpu, Maximize2 } from 'lucide-react';

export default function ExpandSelectedProject({ project, isOpen, onClose }) {
  if (!isOpen || !project) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-10">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-white/80 dark:bg-black/90 backdrop-blur-xl transition-opacity" 
        onClick={onClose} 
      />

      {/* Modal Content */}
      <div className="relative w-full max-w-6xl max-h-[90vh] overflow-y-auto rounded-[40px] border border-gray-200 dark:border-white/10 bg-white dark:bg-zinc-950 shadow-2xl custom-scrollbar transition-all duration-500 animate-in fade-in zoom-in-95">
        
        {/* Close Button */}
        <button 
          onClick={onClose}
          className="absolute right-8 top-8 z-50 p-3 rounded-full bg-gray-100 dark:bg-white/5 text-gray-500 hover:text-blue-500 transition-all"
        >
          <X size={24} />
        </button>

        <div className="flex flex-col lg:flex-row">
          {/* Left: Project Image Gallery */}
          <div className="lg:w-3/5 p-4 lg:p-8 space-y-4">
            <div className="rounded-[32px] overflow-hidden border border-gray-200 dark:border-white/10 aspect-video group relative">
              <img 
                src={project.image} 
                alt={project.title} 
                className="w-full h-full object-cover grayscale contrast-125 hover:grayscale-0 transition-all duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-8">
                <span className="text-white text-sm font-mono flex items-center gap-2">
                  <Maximize2 size={16} /> Preview Main Architecture
                </span>
              </div>
            </div>
            
            {/* Additional Image Slots (Placeholders for me3.jpg, etc) */}
            <div className="grid grid-cols-2 gap-4">
              {[1, 2].map((i) => (
                <div key={i} className="rounded-3xl overflow-hidden border border-gray-200 dark:border-white/10 aspect-video bg-gray-50 dark:bg-white/5">
                   <div className="w-full h-full flex items-center justify-center text-[10px] text-gray-400 uppercase tracking-widest font-bold">
                      System Module {i} Visual
                   </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Technical Details */}
          <div className="lg:w-2/5 p-8 lg:p-12 lg:border-l border-gray-200 dark:border-white/10">
            <div className="space-y-8">
              <div>
                <h2 className="text-4xl font-black text-gray-900 dark:text-white tracking-tighter uppercase mb-2">
                  {project.title}
                </h2>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map(tag => (
                    <span key={tag} className="text-[10px] font-black uppercase tracking-widest px-3 py-1 bg-blue-500/10 text-blue-500 rounded-full border border-blue-500/20">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="space-y-4">
                <h4 className="text-xs font-black text-blue-600 dark:text-blue-400 uppercase tracking-[0.2em] flex items-center gap-2">
                  <Cpu size={14} /> System Logic
                </h4>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                  {project.desc} This system leverages high-performance workflows to bridge the gap between user intent and data processing.
                </p>
              </div>

              <div className="space-y-4 pt-4 border-t border-gray-200 dark:border-white/10">
                <h4 className="text-xs font-black text-gray-400 uppercase tracking-[0.2em] flex items-center gap-2">
                  <Layers size={14} /> Core Technologies
                </h4>
                <div className="flex flex-wrap gap-3">
                  {/* You can pass specific stacks to the project object later */}
                  {['React', 'Laravel', 'Groq AI', 'PostgreSQL'].map(tech => (
                    <span key={tech} className="text-xs font-bold text-gray-800 dark:text-gray-200">{tech}</span>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex gap-4 pt-8">
                <button className="flex-1 py-4 rounded-2xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-sm uppercase tracking-widest transition-all flex items-center justify-center gap-2">
                  <Globe size={18} /> Live Demo
                </button>
                <button className="px-6 rounded-2xl border border-gray-200 dark:border-white/10 hover:border-blue-500/50 transition-all flex items-center justify-center text-gray-600 dark:text-gray-400">
                  <Github size={20} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}