import React from 'react';
import { HelpCircle } from 'lucide-react';

export default function AboutSection() {
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

  // Common unified hover utility classes shared by all tags across rows
  const unifiedTagStyles = "text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full bg-gray-50 dark:bg-white/5 text-gray-600 dark:text-gray-400 border border-gray-200 dark:border-white/10 hover:bg-blue-500/5 dark:hover:bg-blue-500/10 hover:text-blue-600 dark:hover:text-blue-400 hover:border-blue-500/20 dark:hover:border-blue-500/30 transition-all duration-200 cursor-default";

  return (
    <div className="p-8 rounded-3xl border border-gray-200 dark:border-white/10 bg-white/40 dark:bg-zinc-950/20 backdrop-blur-md shadow-sm transition-all duration-300">
      {/* Header with Help Circle Icon */}
      <div className="flex items-center gap-3 mb-6">
        <HelpCircle size={22} className="text-gray-900 dark:text-white" />
        <h2 className="text-xl font-bold text-gray-900 dark:text-white tracking-tight">
          About Me
        </h2>
      </div>

      {/* Straightforward Content Layer */}
      <div className="space-y-6 text-gray-600 dark:text-gray-400 leading-relaxed text-sm font-medium">
        <p>
          I am an aspiring <strong>AI Engineer / Software Engineer</strong>. I focus on building tools integrated with AI, exploring automation fields, and tying things together across software, networking, and hardware systems simplifying processes.
        </p>

        <hr className="border-gray-100 dark:border-white/5 my-4" />

        {/* Clickable Education Section */}
        <div className="space-y-2">
          <h3 className="text-xs font-bold uppercase tracking-wider text-gray-400 dark:text-gray-500">
            Education
          </h3>
          <a 
            href="https://www.ctu.edu.ph/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="group flex items-center gap-4 p-3 rounded-2xl border border-gray-100 dark:border-white/5 bg-gray-50/50 dark:bg-white/[0.01] hover:bg-blue-500/5 dark:hover:bg-blue-500/10 hover:border-blue-500/20 dark:hover:border-blue-500/30 transition-all duration-300"
          >
            {/* School Logo Container */}
            <div className="w-12 h-12 rounded-xl overflow-hidden bg-white p-1 flex items-center justify-center shrink-0 border border-gray-200/80 shadow-sm group-hover:scale-105 transition-transform duration-300">
              <img 
                src="/logos/school_logo.png" 
                alt="Cebu Technological University Logo" 
                className="w-full h-full object-contain"
                onError={(e) => {
                  e.target.style.display = 'none';
                  e.target.parentNode.innerHTML = '<span class="text-xs font-black text-orange-500">CTU</span>';
                }}
              />
            </div>
            
            {/* School Typography Info */}
            <div className="min-w-0">
              <h4 className="text-sm font-bold text-gray-900 dark:text-white group-hover:text-blue-500 dark:group-hover:text-blue-400 transition-colors truncate">
                Cebu Technological University - Main Campus
              </h4>
              <p className="text-xs text-gray-500 dark:text-gray-400 font-medium">
                4th Year | Bachelor of Science in Information Technology (BSIT)
              </p>
            </div>
          </a>
        </div>

        {/* BENTO ROW 1: Core Focus */}
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

        {/* BENTO ROW 2: Mainly Built & Done */}
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

        {/* BENTO ROW 3: Future Steps */}
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