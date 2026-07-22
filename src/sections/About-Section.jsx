import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

export default function AboutSection() {
  // Set "What I Can Do For You" to open by default
  const [isValueOpen, setIsValueOpen] = useState(true);
  // Set Education to closed by default
  const [isEducationOpen, setIsEducationOpen] = useState(false);

  const valueProps = [
    {
      iconPath: "/3d/001.png",
      title: "End-to-End Project Creation",
      desc: "I turn raw ideas into finished products — handling everything from designing clean screens to writing working code."
    },
    {
      iconPath: "/3d/002.png",
      title: "Smart AI & Automation",
      desc: "I build smart features and automated scripts that cut down repetitive tasks and save you hours of manual work."
    },
    {
      iconPath: "/3d/003.png",
      title: "All-in-One Tech Skillset",
      desc: "I bridge web development, graphic design, video creation, game dev, and hardware setup so you don't need multiple hirees."
    }
  ];

  const educationList = [
    {
      school: "Cebu Technological University - Main Campus",
      degree: "Bachelor of Science in Information Technology (BSIT)",
      period: "4th Year",
      isCurrent: true,
      logo: "/logos/school_logo.png",
      fallbackText: "CTU",
      fallbackBg: "text-orange-500",
      link: "https://www.ctu.edu.ph/"
    },
    {
      school: "Asian Institute of Computer Studies (AICS) - Cebu",
      degree: "Information and Communications Technology (ICT Strand)",
      period: "Senior High",
      isCurrent: false,
      logo: "/logos/aics.png",
      fallbackText: "AICS",
      fallbackBg: "text-blue-500",
      link: "https://www.facebook.com/aics.edu.ph"
    },
    {
      school: "Abellana National School",
      degree: "Draftsmanship & Technical Drawing Specialization",
      period: "Junior High",
      isCurrent: false,
      logo: "/logos/ans.png",
      fallbackText: "ANS",
      fallbackBg: "text-red-500",
      link: "https://www.facebook.com/OfficialmembersANS"
    }
  ];

  const coreFocusTags = [
    'AI Automation',
    'Context Engineering',
    'Software Engineering'
  ];

  const buildsTags = [
    'Internet of Things',
    'Desktop Systems',
    'Web Development',
    'Cross-Platform Web Apps',
    'Responsive Websites',
    'Chrome Extensions',
    'Prompt Engineering',
    'Client-Based Projects',
    'Networking'
  ];

  const futureTags = [
    'Loop Engineering',
    'Systems Administration',
    'System Architecture'
  ];

  const unifiedTagStyles = "text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full bg-gray-50 dark:bg-white/5 text-gray-600 dark:text-gray-400 border border-gray-200 dark:border-white/10 hover:bg-blue-500/5 dark:hover:bg-blue-500/10 hover:text-blue-600 dark:hover:text-blue-400 hover:border-blue-500/20 dark:hover:border-blue-500/30 transition-all duration-200 cursor-default sfx-bop";

  return (
    <div className="p-8 rounded-3xl border border-gray-200 dark:border-white/10 bg-white/40 dark:bg-zinc-950/20 backdrop-blur-md shadow-sm transition-all duration-300">
      
      {/* Header with 3D Icon (004.png) */}
      <div className="flex items-center gap-3 mb-6">
        <div className="relative shrink-0 w-8 h-8 flex items-center justify-center">
          <img 
            src="/3d/004.png" 
            alt="About Me Icon" 
            className="w-10 h-10 max-w-none object-contain drop-shadow-[0_4px_8px_rgba(0,0,0,0.15)] dark:drop-shadow-[0_4px_12px_rgba(59,130,246,0.25)] pointer-events-none"
            onError={(e) => {
              e.target.style.display = 'none';
            }}
          />
        </div>
        <h2 className="text-xl font-bold text-gray-900 dark:text-white tracking-tight">
          About Me
        </h2>
      </div>

      {/* Main Intro */}
      <div className="space-y-6 text-gray-600 dark:text-gray-400 leading-relaxed text-sm font-medium">
        <p>
          I design, build, and automate digital experiences. My expertise spans <strong className="text-gray-900 dark:text-white">UI/UX Design</strong>, <strong className="text-gray-900 dark:text-white">Full-Stack Development</strong>, <strong className="text-gray-900 dark:text-white">Graphic Design</strong>, <strong className="text-gray-900 dark:text-white">AI Video Creation</strong>, <strong className="text-gray-900 dark:text-white">Game Development</strong>, <strong className="text-gray-900 dark:text-white">Chrome Extensions</strong>, and <strong className="text-gray-900 dark:text-white">Desktop Automation</strong> — turning ideas into practical, user-friendly tools.
        </p>

        {/* 1. COLLAPSIBLE DROPDOWN: What I Can Do For You (005.png - DEFAULT OPEN) */}
        <div className="rounded-2xl border border-gray-200/80 dark:border-white/10 overflow-hidden bg-gray-50/50 dark:bg-white/[0.01] transition-all">
          <button
            onClick={() => setIsValueOpen(!isValueOpen)}
            className="cursor-target w-full flex items-center justify-between p-4 text-left hover:bg-blue-500/5 dark:hover:bg-blue-500/10 transition-colors group"
          >
            <div className="flex items-center gap-3">
              <div className="relative shrink-0 w-6 h-6 flex items-center justify-center">
                <img 
                  src="/3d/005.png" 
                  alt="Value Icon" 
                  className="w-7 h-7 max-w-none object-contain drop-shadow-[0_2px_6px_rgba(0,0,0,0.12)] group-hover:scale-110 transition-transform duration-200 pointer-events-none"
                  onError={(e) => {
                    e.target.style.display = 'none';
                  }}
                />
              </div>
              <span className="text-xs font-bold uppercase tracking-wider text-gray-900 dark:text-white">
                What I Can Do For You
              </span>
            </div>
            <ChevronDown 
              size={18} 
              className={`text-gray-400 transition-transform duration-300 ease-in-out ${isValueOpen ? 'rotate-180 text-blue-500' : ''}`} 
            />
          </button>

          {/* Smooth Height Transition */}
          <div 
            className={`grid transition-all duration-300 ease-in-out ${
              isValueOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
            }`}
          >
            <div className="overflow-hidden">
              <div className="p-4 pt-0 space-y-3 border-t border-gray-100 dark:border-white/5">
                <div className="grid grid-cols-1 gap-3 pt-3">
                  {valueProps.map((item, idx) => (
                    <div 
                      key={idx}
                      className="sfx-mini group relative flex items-center gap-4 p-4 pl-3 rounded-2xl border border-gray-200/60 dark:border-white/5 bg-white dark:bg-zinc-900/60 shadow-xs hover:border-blue-500/30 transition-all duration-300 cursor-pointer"
                    >
                      <div className="relative shrink-0 w-12 h-12 flex items-center justify-center -ml-1">
                        <img 
                          src={item.iconPath} 
                          alt={item.title} 
                          className="w-14 h-14 max-w-none object-contain drop-shadow-[0_8px_12px_rgba(0,0,0,0.15)] dark:drop-shadow-[0_8px_16px_rgba(59,130,246,0.2)] group-hover:scale-110 group-hover:-translate-y-0.5 transition-transform duration-300 pointer-events-none"
                          onError={(e) => {
                            e.target.style.display = 'none';
                          }}
                        />
                      </div>

                      <div className="min-w-0 flex-1">
                        <h4 className="text-xs font-bold text-gray-900 dark:text-white mb-0.5">
                          {item.title}
                        </h4>
                        <p className="text-xs text-gray-500 dark:text-gray-400 leading-normal">
                          {item.desc}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 2. COLLAPSIBLE DROPDOWN: Education (006.png - DEFAULT CLOSED) */}
        <div className="rounded-2xl border border-gray-200/80 dark:border-white/10 overflow-hidden bg-gray-50/50 dark:bg-white/[0.01] transition-all">
          <button
            onClick={() => setIsEducationOpen(!isEducationOpen)}
            className="cursor-target w-full flex items-center justify-between p-4 text-left hover:bg-blue-500/5 dark:hover:bg-blue-500/10 transition-colors group"
          >
            <div className="flex items-center gap-3">
              <div className="relative shrink-0 w-6 h-6 flex items-center justify-center">
                <img 
                  src="/3d/006.png" 
                  alt="Education Icon" 
                  className="w-7 h-7 max-w-none object-contain drop-shadow-[0_2px_6px_rgba(0,0,0,0.12)] group-hover:scale-110 transition-transform duration-200 pointer-events-none"
                  onError={(e) => {
                    e.target.style.display = 'none';
                  }}
                />
              </div>
              <span className="text-xs font-bold uppercase tracking-wider text-gray-900 dark:text-white">
                Education
              </span>
            </div>
            <ChevronDown 
              size={18} 
              className={`text-gray-400 transition-transform duration-300 ease-in-out ${isEducationOpen ? 'rotate-180 text-blue-500' : ''}`} 
            />
          </button>

          {/* Smooth Height Transition */}
          <div 
            className={`grid transition-all duration-300 ease-in-out ${
              isEducationOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
            }`}
          >
            <div className="overflow-hidden">
              <div className="p-4 pt-0 space-y-3 border-t border-gray-100 dark:border-white/5">
                <div className="space-y-2.5 pt-3">
                  {educationList.map((edu, idx) => (
                    <a
                      key={idx}
                      href={edu.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="cursor-target group flex items-center gap-4 p-3.5 rounded-2xl border border-gray-200/60 dark:border-white/5 bg-white dark:bg-zinc-900/60 shadow-xs hover:border-blue-500/30 hover:bg-blue-500/5 dark:hover:bg-blue-500/10 transition-all duration-300"
                    >
                      <div className="w-10 h-10 shrink-0 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <img 
                          src={edu.logo} 
                          alt={`${edu.school} Logo`} 
                          className="w-full h-full object-contain drop-shadow-xs"
                          onError={(e) => {
                            e.target.style.display = 'none';
                            if (e.target.parentNode) {
                              e.target.parentNode.innerHTML = `<span class="text-xs font-black ${edu.fallbackBg}">${edu.fallbackText}</span>`;
                            }
                          }}
                        />
                      </div>

                      <div className="min-w-0 flex-1">
                        <div className="flex items-center justify-between gap-2 mb-0.5">
                          <h4 className="text-xs font-bold text-gray-900 dark:text-white group-hover:text-blue-500 dark:group-hover:text-blue-400 transition-colors truncate">
                            {edu.school}
                          </h4>
                          <span className={`text-[9px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full shrink-0 border ${
                            edu.isCurrent 
                              ? 'text-blue-600 dark:text-blue-400 bg-blue-500/10 border-blue-500/20' 
                              : 'text-gray-500 dark:text-gray-400 bg-gray-100 dark:bg-white/5 border-gray-200 dark:border-white/10'
                          }`}>
                            {edu.period}
                          </span>
                        </div>
                        <p className="text-xs text-gray-500 dark:text-gray-400 font-medium truncate">
                          {edu.degree}
                        </p>
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        <hr className="border-gray-100 dark:border-white/5 my-4" />

        {/* Tag Rows */}
        <div className="space-y-2 pt-1">
          <h3 className="text-xs font-bold uppercase tracking-wider text-gray-400 dark:text-gray-500">
            Core Focus
          </h3>
          <div className="flex flex-wrap gap-2">
            {coreFocusTags.map((tag) => (
              <span key={tag} className={unifiedTagStyles}>
                {tag}
              </span>
            ))}
          </div>
        </div>

        <div className="space-y-2 pt-1">
          <h3 className="text-xs font-bold uppercase tracking-wider text-gray-400 dark:text-gray-500">
            Mainly Built & Done
          </h3>
          <div className="flex flex-wrap gap-2">
            {buildsTags.map((tag) => (
              <span key={tag} className={unifiedTagStyles}>
                {tag}
              </span>
            ))}
          </div>
        </div>

        <div className="space-y-2 pt-1">
          <h3 className="text-xs font-bold uppercase tracking-wider text-gray-400 dark:text-gray-500">
            Future Steps
          </h3>
          <div className="flex flex-wrap gap-2">
            {futureTags.map((tag) => (
              <span key={tag} className={unifiedTagStyles}>
                {tag}
              </span>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}