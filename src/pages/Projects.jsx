import React from 'react';
import ProjectsSection from '../sections/Projects-Section';

export default function Projects() {
  return (
    <div className="p-8 rounded-3xl border border-gray-200 dark:border-white/10 bg-white/40 dark:bg-zinc-950/20 backdrop-blur-md shadow-sm animate-in fade-in slide-in-from-bottom-4 duration-500">
      <ProjectsSection />
    </div>
  );
}