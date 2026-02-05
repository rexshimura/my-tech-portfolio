import React, { useState } from 'react';
import { FolderCode, ChevronLeft, ChevronRight } from 'lucide-react';
import ExpandSelectedProject from './Expand-Selected-Project';
import { projectsData } from './Projects-Data';

export default function ProjectsSection() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState(0);

  const itemsPerPage = 6;
  const totalPages = Math.ceil(projectsData.length / itemsPerPage);
  const displayedProjects = projectsData.slice(currentPage * itemsPerPage, (currentPage + 1) * itemsPerPage);

  const getStatusColor = (status) => {
    switch (status) {
      case 'Live': return 'bg-emerald-500/10 text-emerald-500 border-emerald-500/20';
      case 'In Progress': return 'bg-amber-500/10 text-amber-500 border-amber-500/20';
      case 'Completed': return 'bg-blue-500/10 text-blue-500 border-blue-500/20';
      default: return 'bg-gray-500/10 text-gray-500 border-gray-500/20';
    }
  };

  return (
    <section className="space-y-8">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <FolderCode size={22} className="text-black dark:text-white" />
          <h2 className="text-xs uppercase tracking-[0.2em] font-bold">Systems & Development</h2>
        </div>
        <div className="flex gap-2 items-center">
           <button onClick={() => setCurrentPage(p => Math.max(0, p - 1))} className="p-2 border rounded-full hover:bg-gray-100 dark:hover:bg-white/10"><ChevronLeft size={18}/></button>
           <span className="text-xs font-mono">{currentPage + 1} / {totalPages}</span>
           <button onClick={() => setCurrentPage(p => (p + 1) % totalPages)} className="p-2 border rounded-full hover:bg-gray-100 dark:hover:bg-white/10"><ChevronRight size={18}/></button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {displayedProjects.map((p) => (
          <div 
            key={p.id} 
            onClick={() => { if(!p.isPlaceholder) { setSelectedProject(p); setIsModalOpen(true); } }}
            className={`group relative overflow-hidden rounded-3xl border border-gray-200 dark:border-white/10 bg-white dark:bg-zinc-900 h-[360px] cursor-pointer transition-all duration-500 hover:-translate-y-2 hover:border-blue-500/50 hover:shadow-2xl hover:shadow-blue-500/10 ${p.isPlaceholder ? 'opacity-50 cursor-default' : ''}`}
          >
            <div className="absolute inset-0 z-0">
              <img src={p.card_image} className="w-full h-full object-cover opacity-10 grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700" alt="" />
              <div className="absolute inset-0 bg-gradient-to-t from-white dark:from-zinc-950 via-white/50 dark:via-zinc-950/50" />
            </div>

            <div className="relative z-10 p-8 flex flex-col h-full">
              <div className="flex-1">
                <h3 className="font-bold text-xl group-hover:text-blue-500 transition-colors">{p.title}</h3>
                <p className="text-gray-500 dark:text-gray-400 text-sm mt-3 leading-relaxed line-clamp-3">{p.desc}</p>
              </div>
              <div className="flex flex-wrap gap-1.5 mt-4">
                {p.tags.map(tag => (
                  <span key={tag} className="text-[9px] font-black uppercase tracking-widest px-2 py-1 bg-blue-500/10 text-blue-500 rounded-lg">{tag}</span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      <ExpandSelectedProject 
        project={selectedProject} 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
      />
    </section>
  );
}