import React from 'react';
import HeroSection from '../sections/Hero-Section';
import AboutSection from '../sections/About-Section';
import ExperienceSidePanel from '../sections/Experience-SidePanel';

export default function About() {
  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <HeroSection />
      <div className="grid grid-cols-1 2xl:grid-cols-2 gap-8">
        <AboutSection />
        <ExperienceSidePanel />
      </div>
    </div>
  );
}