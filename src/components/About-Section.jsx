import React from 'react';
import { CircleQuestionMark } from 'lucide-react';

export default function AboutSection() {
  return (
    <div className="p-8 rounded-3xl border border-gray-200 dark:border-white/10 bg-white dark:bg-white/5 shadow-sm transition-all duration-300">
      {/* Header with New Icon */}
      <div className="flex items-center gap-3 mb-6">
        <CircleQuestionMark size={22} className="text-black dark:text-white" />
        <h2 className="text-xl font-bold text-gray-900 dark:text-white tracking-tight">
          About
        </h2>
      </div>

      {/* Content Aligned with GitHub README */}
      <div className="space-y-4 text-gray-600 dark:text-gray-400 leading-relaxed text-md">
        <p>
          I am a <strong>Software Engineer</strong> building interactive web applications. 
          As a 3rd-year BSIT student at <strong>Cebu Technological University</strong>, 
          I operate with a core philosophy: <em>I don't just write code; I architect systems.</em>
        </p>
        
        <p>
          I specialize in the pre-development lifecycle and system logic, from creating detailed 
          <strong> Storyboards and ERDs</strong> to managing complex pipeline workflows and 
          structuring datasets for seamless backend integration.
        </p>

        {/* Technical focus tags to match the Bento look */}
        <div className="flex flex-wrap gap-2 pt-2">
          {['System Design', 'Pipeline Management', 'Data Prep'].map((tag) => (
            <span key={tag} className="text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full bg-blue-50 dark:bg-blue-500/10 text-blue-600 dark:text-blue-400 border border-blue-100 dark:border-blue-500/20">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}