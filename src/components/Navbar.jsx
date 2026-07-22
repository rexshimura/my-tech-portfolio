import React from 'react';
import { NavLink } from 'react-router-dom';
import { User, Terminal, FolderCode, Award, Camera } from 'lucide-react';

export default function Sidebar() {
  const menuItems = [
    { path: '/about', label: 'About', icon: <User size={18} /> },
    { path: '/tech-stack', label: 'Tech Stack', icon: <Terminal size={18} /> },
    { path: '/projects', label: 'Projects', icon: <FolderCode size={18} /> },
    { path: '/certificates', label: 'Certificates', icon: <Award size={18} /> },
    { path: '/gallery', label: 'Gallery', icon: <Camera size={18} /> }
  ];

  return (
    <header className="sticky top-6 z-[100] w-full mb-8 animate-in fade-in slide-in-from-top-4 duration-500">
      <div className="flex flex-col md:flex-row items-center justify-between gap-4 md:gap-8 bg-white/70 dark:bg-zinc-950/70 backdrop-blur-xl border border-gray-200 dark:border-white/10 p-4 px-6 rounded-[2rem] shadow-md transition-all">
        
        {/* Logo Section */}
        <div className="flex items-center gap-3 shrink-0">
          <img 
            src="/logos/ravenlabs.png" 
            alt="Logo" 
            className="w-10 h-10 object-contain dark:brightness-125"
            onError={(e) => {
              e.target.style.display = 'none';
              e.target.parentNode.innerHTML = '<div class="w-10 h-10 rounded-full bg-blue-500/20 border border-blue-500/30 flex items-center justify-center text-blue-500 font-bold">JP</div>';
            }}
          />
          <div className="text-left">
            <h2 className="text-sm font-black uppercase tracking-widest text-gray-900 dark:text-white">Rexshimura</h2>
            <p className="text-[9px] font-bold text-gray-400 uppercase tracking-widest">Portfolio 2026</p>
          </div>
        </div>

        {/* Navigation Menu */}
        <nav className="flex items-center gap-2 overflow-x-auto w-full md:w-auto pb-2 md:pb-0 scrollbar-hide">
          {menuItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                `flex items-center gap-2.5 px-5 py-3 rounded-2xl transition-all duration-300 shrink-0 whitespace-nowrap text-xs font-bold uppercase tracking-wider ${
                  isActive
                    ? 'bg-blue-600 text-white shadow-lg shadow-blue-500/20 md:-translate-y-0.5'
                    : 'text-gray-500 dark:text-gray-400 hover:bg-gray-200/50 dark:hover:bg-white/5 hover:text-gray-900 dark:hover:text-white'
                }`
              }
            >
              {item.icon}
              {item.label}
            </NavLink>
          ))}
        </nav>
        
      </div>
    </header>
  );
}