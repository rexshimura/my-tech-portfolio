import React from 'react';
import { Briefcase } from 'lucide-react';

export default function ExperienceSidePanel() {
  const experiences = [
    { role: "Systems Architect", company: "Cebu Technological University", year: "Present", desc: "Designing scalable architecture for large e-commerce & erp systems." },
    { role: "AI Integration Specialist", company: "Cebu Technological University", year: "2025", desc: "Implementing LLMs and automated workflows." },
    { role: "Frontend Developer (React)", company: "Cebu Technological University", year: "2023", desc: "Developing responsive web interfaces." },
    { role: "Junior Web & C Developer", company: "Asian Institute of Computer Studies", year: "2021 — 2022", desc: "Foundational exploration in low-level C programming and initial web development projects." }
  ];

  return (
    <div className="flex flex-col h-full p-8 rounded-3xl border border-gray-200 dark:border-white/10 bg-white dark:bg-white/5 shadow-sm transition-all duration-300">
      
      {/* Header */}
      <div className="flex items-center gap-3 mb-10 shrink-0">
        <Briefcase size={22} className="text-black dark:text-white" />
        <h2 className="text-xl font-bold text-gray-900 dark:text-white tracking-tight">Experience</h2>
      </div>

      {/* Main Container */}
      <div className="relative flex-1">
        
        {/* THE LINE: Starting from top (light) to bottom (dark) */}
        {/* Adjusted left-[18px] to match the smaller 36px width container */}
        <div className="absolute left-[18px] top-2 bottom-8 w-[2px] bg-gradient-to-b from-blue-400 via-blue-600 to-blue-900 dark:from-blue-300 dark:via-blue-500 dark:to-blue-900 shadow-[0_0_15px_rgba(59,130,246,0.2)]" />

        <div className="flex flex-col space-y-12">
          {experiences.map((exp, i) => (
            <div key={i} className="flex gap-4 group relative"> {/* Decreased gap from 8 to 4 */}
              
              {/* Milestone Circles - Centered exactly over the line */}
              <div className="flex flex-col items-center shrink-0 w-[36px]"> {/* Reduced width from 52px to 36px */}
                <div className={`w-3 h-3 rounded-full z-10 mt-1.5 transition-all duration-300 group-hover:scale-150 
                  ${exp.year === 'Present' 
                    ? 'bg-blue-400 shadow-[0_0_12px_rgba(147,197,253,0.8)]' 
                    : 'bg-blue-600 shadow-[0_0_8px_rgba(37,99,235,0.4)]'}`} 
                />
              </div>

              {/* Content Side - Now closer to the line */}
              <div className="flex-1">
                <div className="flex justify-between items-start gap-2">
                  <h3 className="font-bold text-gray-900 dark:text-white leading-tight text-[15px] group-hover:text-blue-500 transition-colors">
                    {exp.role}
                  </h3>
                  <span className={`shrink-0 text-[10px] font-mono font-bold ${exp.year === 'Present' ? 'text-blue-600 dark:text-blue-400' : 'text-gray-400 dark:text-gray-500'}`}>
                    {exp.year}
                  </span>
                </div>
                
                <p className="text-[10px] font-bold text-gray-400 dark:text-gray-500 uppercase tracking-widest mt-1">
                  {exp.company}
                </p>
                
                <p className="mt-2 text-xs text-gray-500 dark:text-gray-400/80 leading-relaxed font-medium">
                  {exp.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}