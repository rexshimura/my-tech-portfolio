import React from 'react';
import { Briefcase, Check } from 'lucide-react';

export default function ExperienceSidePanel() {
  const experiences = [
    { 
      role: "Systems Architect (Future)", 
      company: "Self-Driven Exploration / CTU", 
      year: "Soon", 
      desc: "Architecting structure-first platform ecosystems, real-time sync systems, and mapping structural database topologies." 
    },
    { 
      role: "AI Integration Specialist", 
      company: "Cebu Technological University", 
      year: "2025", 
      desc: "Implementing localized LLM architectures, managing context engineering tasks, and deploying inference automation pipelines." 
    },
    { 
      role: "IoT Solutions Developer", 
      company: "Charging & Vaulting Vendo Project", 
      year: "2025", 
      desc: "Prototyping automated hyper-local sensor networks using microcontrollers, liquid crystal panels, and relay switches for telemetry data collection. Exploring more about sensors." 
    },
    { 
      role: "Network Infrastructure Analyst", 
      company: "CTU Lab Topologies (Self-Taught)", 
      year: "2025", 
      desc: "Designing subnet allocations, constructing variable-length subnet masks (VLSM), and evaluating multi-route packet forwarding schemes." 
    },
    { 
      role: "Independent Game Developer", 
      company: "Open Source Builds", 
      year: "2024", 
      desc: "Developing state-driven interactive simulation games and real-time canvas-based mechanics on web layers." 
    },
    { 
      role: "Frontend Developer (React)", 
      company: "Cebu Technological University", 
      year: "2023", 
      desc: "Developing responsive web interfaces." 
    },
    { 
      role: "Junior Web Developer & C Programmer", 
      company: "Asian Institute of Computer Studies", 
      year: "2021 — 2022", 
      desc: "Foundational exploration in low-level C programming and initial web development projects." 
    }
  ];

  return (
    <div className="flex flex-col h-full p-8 rounded-3xl border border-gray-200 dark:border-white/10 bg-white/40 dark:bg-zinc-950/20 backdrop-blur-md shadow-sm transition-all duration-300">
      
      {/* Header */}
      <div className="flex flex-col gap-1.5 mb-10 shrink-0">
        <div className="flex items-center gap-3">
          <Briefcase size={22} className="text-gray-900 dark:text-white" />
          <h2 className="text-xl font-bold text-gray-900 dark:text-white tracking-tight">Academic & Self-Taught Path</h2>
        </div>
        <p className="text-[9px] font-semibold text-gray-400 dark:text-gray-500 uppercase tracking-widest pl-[34px]">
          5+ Years of Development & Engineering (Senior High to College)
        </p>
      </div>

      {/* Main Container */}
      <div className="relative flex-1 custom-scrollbar overflow-y-auto pr-1">
        
        {/* 🛠️ ORDER-TRACKER STYLE VERTICAL LINE */}
        {/* Continuous solid backbone matching the reference image layout */}
        <div className="absolute left-3 top-3 bottom-6 w-[2px] bg-blue-600 dark:bg-cyan-500 pointer-events-none" />
        
        {/* Topmost future line segment styled as a muted fallback */}
        <div className="absolute left-3 top-3 h-[52px] w-[2px] bg-gray-200 dark:bg-zinc-800 pointer-events-none" />

        <div className="flex flex-col space-y-8">
          {experiences.map((exp, i) => {
            const isFuture = exp.year === 'Soon';
            const isCurrentPhase = i === 1; // AI Integration phase

            return (
              <div key={i} className="flex gap-5 group relative">
                
                {/* 🏷️ STATUS NODE LAYER (Directly modeled after your reference picture) */}
                <div className="flex flex-col items-center shrink-0 w-6">
                  {isFuture ? (
                    // Soon / Upcoming state placeholder
                    <div className="w-6 h-6 rounded-full z-10 bg-white dark:bg-zinc-900 border-2 border-gray-300 dark:border-zinc-700 flex items-center justify-center text-gray-400 font-bold text-[10px]">
                      —
                    </div>
                  ) : isCurrentPhase ? (
                    // Current Step: Active glowing check anchor
                    <div className="relative w-6 h-6 rounded-full z-10 flex items-center justify-center bg-blue-600 dark:bg-cyan-500 text-white shadow-[0_0_10px_rgba(37,99,235,0.5)] dark:shadow-[0_0_10px_rgba(34,211,238,0.5)]">
                      <div className="absolute inset-0 rounded-full bg-blue-600 dark:bg-cyan-500 animate-ping opacity-25" />
                      <Check size={12} strokeWidth={3} />
                    </div>
                  ) : (
                    // Verified Past Step: Completed check circle match
                    <div className="w-6 h-6 rounded-full z-10 bg-blue-600 dark:bg-cyan-500 text-white flex items-center justify-center shadow-sm transition-transform group-hover:scale-105 duration-200">
                      <Check size={12} strokeWidth={3} />
                    </div>
                  )}
                </div>

                {/* 📄 TEXT BLOCK LAYER */}
                <div className="flex-1 min-w-0 pt-0.5">
                  <div className="flex justify-between items-baseline gap-4">
                    <h3 className={`font-bold text-[15px] leading-tight transition-colors ${isFuture ? 'text-gray-400 dark:text-gray-500 group-hover:text-gray-900 dark:group-hover:text-white' : 'text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-cyan-400'}`}>
                      {exp.role}
                    </h3>
                  </div>
                  
                  <p className={`mt-1.5 text-xs leading-relaxed font-medium transition-colors ${isFuture ? 'text-gray-400/50 dark:text-gray-500/40' : 'text-gray-600 dark:text-gray-400'}`}>
                    {exp.desc}
                  </p>

                  <div className="flex gap-2 items-center mt-2">
                    <span className="text-[9px] font-extrabold text-gray-400 dark:text-gray-500 uppercase tracking-widest">
                      {exp.company}
                    </span>
                    <span className="text-gray-300 dark:text-zinc-700 text-[10px]">•</span>
                    <span className={`text-[10px] font-mono font-bold tracking-tight ${isFuture ? 'text-gray-400 dark:text-gray-600' : isCurrentPhase ? 'text-blue-600 dark:text-cyan-400 font-extrabold' : 'text-gray-400 dark:text-gray-500'}`}>
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