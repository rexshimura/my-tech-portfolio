import React from 'react';
import { NavLink } from 'react-router-dom';
import { User, Terminal, FolderCode, Award, Camera, Sun, Moon } from 'lucide-react';

export default function Navbar({ theme, toggleTheme }) {
  const menuItems = [
    { path: '/about', label: 'About', icon: <User size={18} /> },
    { path: '/tech-stack', label: 'Tech Stack', icon: <Terminal size={18} /> },
    { path: '/projects', label: 'Projects', icon: <FolderCode size={18} /> },
    { path: '/certificates', label: 'Certificates', icon: <Award size={18} /> },
    { path: '/gallery', label: 'Gallery', icon: <Camera size={18} /> }
  ];

  return (
    <header className="sticky top-6 z-[100] w-full mb-8 animate-in fade-in slide-in-from-top-4 duration-500">
      <div className="flex flex-row items-center justify-between gap-2 sm:gap-4 bg-white/70 dark:bg-zinc-950/70 backdrop-blur-xl border border-gray-200 dark:border-white/10 p-3 sm:px-6 rounded-[2rem] shadow-md transition-all">
        
        {/* Logo Section */}
        <div className="flex items-center gap-3 shrink-0">
          <img 
            src="/logos/ravenlabs.png" 
            alt="Logo" 
            className="w-9 h-9 sm:w-10 sm:h-10 object-contain dark:brightness-125"
            onError={(e) => {
              e.target.style.display = 'none';
              if (e.target.parentNode) {
                e.target.parentNode.innerHTML = '<div class="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-blue-500/20 border border-blue-500/30 flex items-center justify-center text-blue-500 font-bold text-xs sm:text-sm">JP</div>';
              }
            }}
          />
          <div className="text-left hidden min-[400px]:block">
            <h2 className="text-xs sm:text-sm font-black uppercase tracking-widest text-gray-900 dark:text-white leading-none">
              Rexshimura
            </h2>
            <p className="text-[8px] sm:text-[9px] font-bold text-gray-400 uppercase tracking-widest mt-1">
              Portfolio 2026
            </p>
          </div>
        </div>

        {/* Navigation Menu & Theme Toggle */}
        <div className="flex items-center gap-2 sm:gap-3 shrink-0">
          <nav className="flex items-center gap-1 sm:gap-2">
            {menuItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                title={item.label}
                className={({ isActive }) =>
                  `flex items-center gap-2 p-2.5 sm:px-4 sm:py-3 rounded-2xl transition-all duration-300 shrink-0 whitespace-nowrap text-xs font-bold uppercase tracking-wider ${
                    isActive
                      ? 'bg-blue-600 text-white shadow-lg shadow-blue-500/20 -translate-y-0.5'
                      : 'text-gray-500 dark:text-gray-400 hover:bg-gray-200/50 dark:hover:bg-white/5 hover:text-gray-900 dark:hover:text-white'
                  }`
                }
              >
                {item.icon}
                {/* Shows text on lg screens and up, hides on smaller screens */}
                <span className="hidden lg:inline">{item.label}</span>
              </NavLink>
            ))}
          </nav>

          {/* Divider */}
          <div className="h-6 w-[1px] bg-gray-200 dark:bg-white/10 mx-1" />

          {/* Theme Switcher Button */}
          <button
            onClick={toggleTheme}
            aria-label="Toggle Theme"
            className="cursor-target shrink-0 p-2.5 rounded-2xl border border-gray-200 dark:border-white/10 bg-gray-100/80 dark:bg-zinc-900/80 hover:bg-gray-200 dark:hover:bg-zinc-800 text-amber-500 dark:text-blue-400 transition-all duration-300 group sfx-bop"
          >
            {theme === 'dark' ? (
              <Moon size={18} className="group-hover:rotate-12 transition-transform duration-300" />
            ) : (
              <Sun size={18} className="group-hover:rotate-45 transition-transform duration-300" />
            )}
          </button>
        </div>

      </div>
    </header>
  );
}