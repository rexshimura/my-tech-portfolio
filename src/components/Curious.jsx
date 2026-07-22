import React, { useState, useEffect } from 'react';
import { X } from 'lucide-react';

export default function Curious({ isOpen, onClose }) {
  const [showText, setShowText] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setShowText(false);
      // 1 second delay before showing the animated text
      const timer = setTimeout(() => {
        setShowText(true);
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 z-[999] flex items-center justify-center bg-black/60 backdrop-blur-md p-4 animate-in fade-in duration-300"
      onClick={onClose}
    >
      <div 
        className="relative flex flex-col sm:flex-row items-center gap-6 max-w-lg w-full bg-white dark:bg-zinc-900 border border-gray-200 dark:border-white/10 rounded-[32px] p-6 md:p-8 shadow-2xl animate-in zoom-in-95 duration-300"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-full bg-gray-100 dark:bg-zinc-800 text-gray-500 hover:text-gray-900 dark:hover:text-white transition-colors cursor-target"
        >
          <X size={16} />
        </button>

        {/* Profile Image (Shows immediately) */}
        <div className="w-36 h-36 sm:w-44 sm:h-44 shrink-0 rounded-full overflow-hidden border-4 border-blue-500/30 shadow-xl animate-in fade-in zoom-in-50 duration-500">
          <img 
            src="/id/me3.jpg" 
            alt="John Paul P. Mahilom" 
            className="w-full h-full object-cover"
          />
        </div>

        {/* Animated Text Bubble (Appears 1 second later) */}
        <div className="flex-1 w-full min-h-[80px] flex items-center justify-center">
          {showText ? (
            <div className="relative bg-blue-500/10 dark:bg-blue-500/20 border border-blue-500/30 rounded-2xl p-5 text-center sm:text-left w-full animate-in fade-in slide-in-from-bottom-3 duration-500">
              <p className="text-sm md:text-base font-bold text-gray-900 dark:text-white leading-relaxed">
                "do i look handsome?.. <span className="text-blue-500 font-black italic">pause</span> just kidding.."
              </p>
            </div>
          ) : (
            <div className="flex items-center justify-center gap-1.5 py-4">
              <div className="w-2 h-2 rounded-full bg-blue-500 animate-bounce [animation-delay:-0.3s]"></div>
              <div className="w-2 h-2 rounded-full bg-blue-500 animate-bounce [animation-delay:-0.15s]"></div>
              <div className="w-2 h-2 rounded-full bg-blue-500 animate-bounce"></div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}