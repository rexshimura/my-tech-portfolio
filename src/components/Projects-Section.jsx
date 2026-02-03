import React, { useState } from 'react';
import { ExternalLink, FolderCode } from 'lucide-react';
import ExpandSelectedProject from './Expand-Selected-Project'; // Import your new file

export default function ProjectsSection() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const projects = [
    { 
      title: "Instructor Evaluation System", 
      desc: "Digital platform with integrated facial recognition for secure profiling and AWS-backed evaluation.", 
      tags: ["Facial-Recognition", "AWS", "Profiling"],
      image: "/images/insprof.png"
    },
    { 
      title: "Barangay Records System", 
      desc: "Streamlined operations hub for citizen data, automated statistics, and transaction logging.", 
      tags: ["Automation", "Public", "Statistics"],
      image: "/images/mapro.png"
    },
    { 
      title: "Petmosphere", 
      desc: "Centralized online adoption hub connecting future pet parents with animals in need.", 
      tags: ["Adoption", "Webapp", "Centralized"],
      image: "/images/pet-bg.jpg"
    },
    { 
      title: "AI. Cookmate", 
      desc: "AI Kitchen Assistant using natural language chat to generate and personalize recipes.", 
      tags: ["AI", "LLM", "Chatbot"],
      image: "/images/cookmate.png"
    },
    { 
      title: "Procurement Management", 
      desc: "ERP solution for BCJ Logistics to automate requisition, inventory, and procurement workflows.", 
      tags: ["ERP", "Management", "Logistics"],
      image: "/images/procurement-bg.jpg"
    },
    { 
      title: "Unit Battle Simulator", 
      desc: "A red-vs-blue sandbox simulator built for strategic unit battle testing.", 
      tags: ["Game", "Simulator", "Battle"],
      image: "/images/unit.png"
    }
  ];

  const handleOpenProject = (project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  return (
    <section className="space-y-8">
      <div className="flex items-center gap-3">
        <FolderCode size={22} className="text-blue-600 dark:text-blue-400" />
        <h2 className="text-xs uppercase tracking-[0.2em] text-blue-600 dark:text-blue-500 font-bold">
          Systems & Development
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((p) => (
          <div 
            key={p.title} 
            onClick={() => handleOpenProject(p)}
            className="group relative overflow-hidden rounded-3xl border border-gray-200 dark:border-white/10 bg-white dark:bg-zinc-900 transition-all duration-500 hover:border-blue-500/50 flex flex-col h-[360px] cursor-pointer"
          >
            {/* Background Image Layer */}
            <div className="absolute inset-0 z-0">
              <img 
                src={p.image} 
                alt={p.title}
                className="w-full h-full object-cover opacity-10 dark:opacity-20 grayscale transition-all duration-700 group-hover:scale-110 group-hover:opacity-30 group-hover:grayscale-0"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-white via-white/40 to-transparent dark:from-zinc-950 dark:via-zinc-950/40 dark:to-transparent" />
            </div>

            {/* Content Layer */}
            <div className="relative z-10 p-6 flex flex-col h-full">
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-gray-900 dark:text-white font-bold text-lg leading-tight tracking-tight group-hover:text-blue-500 transition-colors">
                  {p.title}
                </h3>
                <ExternalLink size={18} className="text-gray-400 group-hover:text-blue-500 transition-colors shrink-0" />
              </div>

              <p className="text-gray-600 dark:text-gray-400 text-xs leading-relaxed flex-1">
                {p.desc}
              </p>

              <div className="flex flex-wrap gap-1.5 mt-4">
                {p.tags.map(tag => (
                  <span 
                    key={tag} 
                    className="text-[9px] font-black uppercase tracking-widest px-2 py-1 bg-blue-50 dark:bg-blue-500/10 rounded-lg text-blue-600 dark:text-blue-400 border border-blue-100 dark:border-blue-500/20"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* The Expansion Modal */}
      <ExpandSelectedProject 
        project={selectedProject} 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
      />
    </section>
  );
}