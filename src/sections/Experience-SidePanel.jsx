import React from 'react';
import { Check } from 'lucide-react';
import useSFX from '../hooks/useSFX'; // Using default export hook

export default function ExperienceSidePanel() {
  const { playHoverMini } = useSFX();

  const handleMouseEnter = () => {
    if (playHoverMini) {
      playHoverMini();
    }
  };

  const experiences = [
    { 
      role: "AI Integration & Automation", 
      company: "Cebu Technological University", 
      year: "Current Phase", 
      desc: "Integrating LLMs, prompt engineering, context management, and deploying intelligent workflow pipelines." 
    },
    { 
      role: "Game Development", 
      company: "Open Source Builds", 
      year: "2025", 
      desc: "Building interactive simulation web games and state-driven canvas mechanics." 
    },
    { 
      role: "Networking & IoT Solutions", 
      company: "Hardware & Network Topologies", 
      year: "2025", 
      desc: "Subnetting (VLSM), multi-route schemes, and prototyping microcontroller sensor networks with relays and displays." 
    },
    { 
      role: "Cross-Platform Mobile & Web Apps", 
      company: "Client & Capstone Projects", 
      year: "2024", 
      desc: "Developing responsive, cross-platform applications with seamless API integrations and interactive interfaces." 
    },
    { 
      role: "Full Stack Developer (Node / Laravel)", 
      company: "Web System Projects", 
      year: "2024", 
      desc: "Building robust backends, designing database schemas, and connecting client-side dynamic views." 
    },
    { 
      role: "Figma Prototyping & Design Libraries", 
      company: "UI/UX & Interactive Design", 
      year: "2024", 
      desc: "Crafting high-fidelity wireframes, interactive user flows, component design systems, and design tokens." 
    },
    { 
      role: "Python OOP & Data Structures", 
      company: "Cebu Technological University", 
      year: "2023", 
      desc: "Object-oriented programming, data algorithms, scripting, and backend logic building." 
    },
    { 
      role: "Frontend Development (React)", 
      company: "Cebu Technological University", 
      year: "2023", 
      desc: "Crafting clean, reactive component architectures and modern UI layouts." 
    },
    { 
      role: "Junior Web Developer & C Programmer", 
      company: "Asian Institute of Computer Studies", 
      year: "2021 — 2022", 
      desc: "Foundational low-level programming in C and initial hands-on web development." 
    },
    { 
      role: "Graphic Designer & Technical Artist", 
      company: "Creative Practice / Freelance", 
      year: "2020", 
      desc: "Visual design, layout composition, photo editing, and technical drafting fundamentals." 
    }
  ];

  return (
    <div className="flex flex-col h-full p-8 rounded-3xl border border-gray-200 dark:border-white/10 bg-white/40 dark:bg-zinc-950/20 backdrop-blur-md shadow-sm transition-all duration-300">
      
      {/* Header with 3D Icon (007.png) */}
      <div className="flex flex-col gap-1.5 mb-8 shrink-0">
        <div className="flex items-center gap-3">
          <div className="relative shrink-0 w-8 h-8 flex items-center justify-center">
            <img 
              src="/3d/007.png" 
              alt="Experience Timeline Icon" 
              className="w-10 h-10 max-w-none object-contain drop-shadow-[0_4px_8px_rgba(0,0,0,0.15)] dark:drop-shadow-[0_4px_12px_rgba(59,130,246,0.25)] pointer-events-none"
              onError={(e) => {
                e.target.style.display = 'none';
              }}
            />
          </div>
          <h2 className="text-xl font-bold text-gray-900 dark:text-white tracking-tight">
            Academic & Self-Taught Path
          </h2>
        </div>
        <p className="text-[9px] font-semibold text-gray-400 dark:text-gray-500 uppercase tracking-widest pl-[44px]">
          5+ Years of Development & Engineering Growth
        </p>
      </div>

      {/* Main Container - Fills remaining height dynamically */}
      <div className="relative flex-1 flex flex-col min-h-0">
        
        {/* Continuous Dynamic Vertical Line */}
        <div className="absolute left-3 top-3 bottom-3 w-[2px] bg-blue-600 dark:bg-cyan-500 pointer-events-none" />

        {/* Dynamic Flex Container (stretches row gap to fit available panel height) */}
        <div className="flex flex-col justify-between h-full py-1">
          {experiences.map((exp, i) => {
            const isCurrentPhase = i === 0;

            return (
              <div 
                key={i} 
                className="sfx-mini flex gap-5 group relative cursor-pointer"
                onMouseEnter={handleMouseEnter}
              >
                
                {/* STATUS NODE */}
                <div className="flex flex-col items-center shrink-0 w-6">
                  {isCurrentPhase ? (
                    <div className="relative w-6 h-6 rounded-full z-10 flex items-center justify-center bg-white dark:bg-zinc-900 border-2 border-blue-600 dark:border-cyan-400 text-blue-600 dark:text-cyan-400 shadow-[0_0_12px_rgba(37,99,235,0.4)] dark:shadow-[0_0_12px_rgba(34,211,238,0.4)]">
                      <div className="absolute inset-0 rounded-full bg-blue-500/20 dark:bg-cyan-400/20 animate-ping" />
                      <div className="w-2 h-2 rounded-full bg-blue-600 dark:bg-cyan-400 animate-pulse" />
                    </div>
                  ) : (
                    <div className="w-6 h-6 rounded-full z-10 bg-blue-600 dark:bg-cyan-500 text-white flex items-center justify-center shadow-sm transition-transform group-hover:scale-105 duration-200">
                      <Check size={12} strokeWidth={3} />
                    </div>
                  )}
                </div>

                {/* TEXT CONTENT LAYER */}
                <div className="flex-1 min-w-0 pt-0.5">
                  <div className="flex justify-between items-baseline gap-4">
                    <h3 className="font-bold text-[14px] leading-tight text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-cyan-400 transition-colors">
                      {exp.role}
                    </h3>
                  </div>
                  
                  <p className="mt-1 text-[11px] leading-relaxed font-medium text-gray-500 dark:text-gray-400">
                    {exp.desc}
                  </p>

                  <div className="flex gap-2 items-center mt-1.5">
                    <span className="text-[9px] font-extrabold text-gray-400 dark:text-gray-500 uppercase tracking-widest">
                      {exp.company}
                    </span>
                    <span className="text-gray-300 dark:text-zinc-700 text-[10px]">•</span>
                    <span className={`text-[10px] font-mono font-bold tracking-tight ${isCurrentPhase ? 'text-blue-600 dark:text-cyan-400 font-extrabold uppercase' : 'text-gray-400 dark:text-gray-500'}`}>
                      {exp.year}
                    </span>
                  </div>
                </div>

              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}