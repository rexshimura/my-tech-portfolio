import React, { useState } from 'react';
import { MapPin, Code2, Sparkles, BadgeCheck } from 'lucide-react';

export default function ProfileBanner() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <section className="flex flex-col md:flex-row items-center gap-10">
      {/* Profile Image with Hover Swap */}
      <div 
        className="relative shrink-0 cursor-pointer group"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* The Container - Fixed to be a perfect Circle */}
        <div className="w-32 h-32 rounded-full overflow-hidden border-2 border-gray-200 dark:border-white/10 ring-4 ring-gray-100 dark:ring-white/5 transition-all duration-500 group-hover:ring-blue-500/20 group-hover:scale-105 relative">
          {/* Main Image */}
          <img 
            src="/id/me.jpg" 
            alt="John Paul P. Mahilom" 
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ${isHovered ? 'opacity-0' : 'opacity-100'}`}
          />
          {/* Hover Image */}
          <img 
            src="/id/me2.jpg" 
            alt="John Paul P. Mahilom Alternate" 
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ${isHovered ? 'opacity-100' : 'opacity-0'}`}
          />
        </div>
        
        {/* Status Dot - Z-index ensures it stays above the images */}
        <div className="absolute bottom-2 right-2 w-4 h-4 bg-green-500 border-2 border-white dark:border-[#0a0a0a] rounded-full shadow-sm z-30"></div>
      </div>

      <div className="text-center md:text-left">
        {/* Verified Name */}
        <div className="flex items-center justify-center md:justify-start gap-2">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white tracking-tight">
            John Paul P. Mahilom
          </h1>
          <BadgeCheck 
            size={26} 
            className="text-blue-500 fill-blue-500/10 mt-1" 
            strokeWidth={2.5}
          />
        </div>
        
        {/* Animated Titles */}
        <div className="flex items-center justify-center md:justify-start gap-2 mt-2">
          <Code2 size={22} className="text-blue-500 shrink-0" />
          <img 
            src="https://readme-typing-svg.herokuapp.com?font=Fira+Code&weight=600&size=22&pause=1000&color=3B82F6&center=false&vCenter=true&width=500&lines=React+%26+Laravel+Developer;System+Planner+%26+Architect;AI+%26+NLP+Enthusiast;Future+Mobile+Developer" 
            alt="Typing Title" 
            className="h-10"
          />
        </div>

        {/* Location & Status */}
        <div className="flex flex-col md:flex-row items-center md:gap-6 mt-3 text-sm">
          <div className="flex items-center gap-2 text-gray-500 dark:text-gray-400">
            <MapPin size={16} />
            <span>Cebu, Philippines</span>
          </div>
          
          <div className="flex items-center gap-2 text-blue-600 dark:text-blue-500/80 font-medium">
            <Sparkles size={16} />
            <span className="uppercase tracking-widest text-[10px] font-bold">Open for Collaboration</span>
          </div>
        </div>
      </div>
    </section>
  );
}