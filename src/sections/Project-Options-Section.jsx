import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown } from 'lucide-react';

const CATEGORIES = [
  { id: 'Featured', label: 'Featured', icon: <img src="/3d/010.png" alt="Featured" className="w-5 h-5 object-contain drop-shadow-sm" /> },
  { id: 'Websites', label: 'Websites', icon: <img src="/3d/011.png" alt="Websites" className="w-5 h-5 object-contain drop-shadow-sm" /> },
  { id: 'Integrated AI', label: 'Integrated AI', icon: <img src="/3d/012.png" alt="Integrated AI" className="w-5 h-5 object-contain drop-shadow-sm" /> },
  { id: 'Mobile', label: 'Mobile', icon: <img src="/3d/013.png" alt="Mobile" className="w-5 h-5 object-contain drop-shadow-sm" /> },
  { id: 'Desktop', label: 'Desktop', icon: <img src="/3d/014.png" alt="Desktop" className="w-5 h-5 object-contain drop-shadow-sm" /> },
  { id: 'Extensions', label: 'Extensions', icon: <img src="/3d/015.png" alt="Extensions" className="w-5 h-5 object-contain drop-shadow-sm" /> },
  { id: 'IoT', label: 'IoT', icon: <img src="/3d/016.png" alt="IoT" className="w-5 h-5 object-contain drop-shadow-sm" /> },
  { id: 'Games', label: 'Games', icon: <img src="/3d/017.png" alt="Games" className="w-5 h-5 object-contain drop-shadow-sm" /> },
];

export default function ProjectOptionsSection({ activeCategory, onSelectCategory }) {
  const [isOpen, setIsOpen] = useState(false);

  const activeCatObj = CATEGORIES.find((c) => c.id === activeCategory) || CATEGORIES[0];

  const handleSelect = (id) => {
    onSelectCategory(id);
    setIsOpen(false);
  };

  return (
    <aside className="w-full xl:w-64 shrink-0">
      <motion.div 
        layout 
        className="sticky top-28 p-3 sm:p-4 rounded-3xl border border-gray-200 dark:border-white/10 bg-white/40 dark:bg-zinc-950/20 backdrop-blur-md shadow-sm space-y-2"
        transition={{ duration: 0.4, ease: [0.23, 1, 0.32, 1] }}
      >
        
        {/* DESKTOP HEADER LABEL */}
        <div className="px-3 pt-2 pb-1 hidden xl:block">
          <span className="text-[10px] font-black uppercase tracking-widest text-blue-500">
            Categories
          </span>
        </div>

        {/* MOBILE / TABLET COLLAPSIBLE DROPDOWN BUTTON (Visible below xl) */}
        <div className="xl:hidden w-full relative">
          <button
            onClick={() => setIsOpen((prev) => !prev)}
            className="w-full flex items-center justify-between gap-3 px-4 py-3 rounded-2xl bg-white/80 dark:bg-zinc-900/80 border border-gray-200/80 dark:border-white/10 text-xs font-black uppercase tracking-wider text-gray-900 dark:text-white shadow-sm cursor-pointer sfx-bop transition-all"
            aria-expanded={isOpen}
          >
            <div className="flex items-center gap-3">
              <span className="text-blue-500 dark:text-blue-400">
                {activeCatObj.icon}
              </span>
              <span>{activeCatObj.label}</span>
            </div>
            
            <ChevronDown 
              size={18} 
              className={`text-gray-400 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} 
            />
          </button>

          {/* MOBILE EXPANDABLE MENU (SMOOTH HEIGHT STRETCH) */}
          <AnimatePresence initial={false}>
            {isOpen && (
              <motion.div 
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3, ease: [0.23, 1, 0.32, 1] }}
                className="overflow-hidden mt-2"
              >
                <div className="p-2 rounded-2xl bg-white dark:bg-zinc-900 border border-gray-200 dark:border-white/10 shadow-xl">
                  <div className="grid grid-cols-2 gap-1.5 relative">
                    {CATEGORIES.map((cat) => {
                      const isActive = activeCategory === cat.id;

                      return (
                        <button
                          key={cat.id}
                          onClick={() => handleSelect(cat.id)}
                          className={`relative flex items-center gap-2.5 px-3 py-2.5 rounded-xl text-[11px] font-bold uppercase tracking-wider transition-colors duration-300 cursor-pointer group ${
                            isActive ? 'text-white' : 'text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-white/5 hover:text-gray-900 dark:hover:text-white'
                          }`}
                        >
                          {/* Smooth Sliding Background for Mobile */}
                          {isActive && (
                            <motion.div
                              layoutId="mobileActiveTab"
                              className="absolute inset-0 bg-blue-600 rounded-xl shadow-md shadow-blue-500/20"
                              initial={false}
                              transition={{ type: "spring", stiffness: 400, damping: 30 }}
                            />
                          )}
                          
                          <span className={`relative z-10 shrink-0 transition-colors duration-300 ${isActive ? 'text-white' : 'group-hover:scale-110'}`}>
                            {cat.icon}
                          </span>
                          <span className="relative z-10 truncate">{cat.label}</span>
                        </button>
                      );
                    })}
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* DESKTOP VERTICAL NAV LIST (Hidden below xl) */}
        <nav className="hidden xl:flex xl:flex-col gap-1.5 relative">
          {CATEGORIES.map((cat) => {
            const isActive = activeCategory === cat.id;

            return (
              <button
                key={cat.id}
                onClick={() => onSelectCategory(cat.id)}
                className={`relative flex items-center gap-3 px-4 py-3 rounded-2xl text-xs font-bold uppercase tracking-wider shrink-0 transition-colors duration-300 cursor-pointer sfx-bop group ${
                  isActive ? 'text-white' : 'text-gray-500 dark:text-gray-400 hover:bg-gray-200/50 dark:hover:bg-white/5 hover:text-gray-900 dark:hover:text-white'
                }`}
              >
                {/* Smooth Sliding Background for Desktop */}
                {isActive && (
                  <motion.div
                    layoutId="desktopActiveTab"
                    className="absolute inset-0 bg-blue-600 rounded-2xl shadow-md shadow-blue-500/20"
                    initial={false}
                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                  />
                )}
                
                <span className={`relative z-10 transition-transform duration-300 ${isActive ? '' : 'group-hover:scale-110'}`}>
                  {cat.icon}
                </span>
                <span className="relative z-10">{cat.label}</span>
              </button>
            );
          })}
        </nav>

      </motion.div>
    </aside>
  );
}