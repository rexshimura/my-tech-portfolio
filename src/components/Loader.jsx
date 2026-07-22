import React, { useState, useEffect, useMemo } from 'react';

export default function Loader({ onComplete }) {
  const [step, setStep] = useState(1);
  const [isExiting, setIsExiting] = useState(false);

  // Your 5 specific sequences
  const sequences = useMemo(() => [
    [1, 2, 3],
    [1, 6, 5],
    [7, 3, 4],
    [7, 6, 3],
    [7, 5, 1]
  ], []);

  // Randomly select one of the 5 sequences when the component first mounts
  const [currentSequence] = useState(() => {
    return sequences[Math.floor(Math.random() * sequences.length)];
  });

  useEffect(() => {
    // Preload the 3 specific GIFs for the chosen sequence to prevent flickering
    currentSequence.forEach((num) => {
      const img = new Image();
      img.src = `/gif/wait${num}.gif`;
    });

    const timers = [
      // Switch to the 2nd GIF in the sequence after 1.2 seconds
      setTimeout(() => setStep(2), 1200),
      
      // Switch to the 3rd GIF in the sequence after 2.4 seconds
      setTimeout(() => setStep(3), 2400),
      
      // Trigger the cinematic exit animation after 3.6 seconds
      setTimeout(() => setIsExiting(true), 3600),  
      
      // Unmount completely after 4.4 seconds
      setTimeout(() => onComplete(), 4400)         
    ];
    
    return () => timers.forEach(clearTimeout);
  }, [currentSequence, onComplete]);

  return (
    <div 
      className={`fixed inset-0 z-[999] flex flex-col items-center justify-center bg-white dark:bg-[#050505] transition-all duration-700 ease-[cubic-bezier(0.76,0,0.24,1)] pointer-events-none ${
        isExiting ? 'opacity-0 bg-transparent backdrop-blur-sm' : 'opacity-100'
      }`}
    >
      <div 
        className={`transition-all duration-[800ms] ease-[cubic-bezier(0.76,0,0.24,1)] flex flex-col items-center justify-center gap-6 ${
          isExiting 
            ? 'scale-125 blur-xl opacity-0 -translate-y-12' 
            : 'scale-100 blur-0 opacity-100 translate-y-0'  
        }`}
      >
        
        {/* GIF Stack Wrapper */}
        <div className="relative w-32 h-32 md:w-48 md:h-48">
          
          {/* Step 1 GIF */}
          <img 
            src={`/gif/wait${currentSequence[0]}.gif`} 
            alt="Loading Sequence Part 1" 
            className={`absolute inset-0 w-full h-full object-contain transition-opacity duration-300 ${
              step === 1 ? 'opacity-100' : 'opacity-0'
            }`}
          />
          
          {/* Step 2 GIF */}
          <img 
            src={`/gif/wait${currentSequence[1]}.gif`} 
            alt="Loading Sequence Part 2" 
            className={`absolute inset-0 w-full h-full object-contain transition-opacity duration-300 ${
              step === 2 ? 'opacity-100' : 'opacity-0'
            }`}
          />
          
          {/* Step 3 GIF */}
          <img 
            src={`/gif/wait${currentSequence[2]}.gif`} 
            alt="Loading Sequence Part 3" 
            className={`absolute inset-0 w-full h-full object-contain transition-opacity duration-300 ${
              step >= 3 ? 'opacity-100' : 'opacity-0'
            }`}
          />
        </div>

        {/* Loading Text */}
        <div className="flex items-center gap-1 text-[10px] font-mono text-gray-500 font-bold uppercase tracking-widest mt-2">
          <span className="animate-pulse">Loading Workspace</span>
          <span className="animate-[bounce_1s_infinite]">.</span>
          <span className="animate-[bounce_1s_infinite_100ms]">.</span>
          <span className="animate-[bounce_1s_infinite_200ms]">.</span>
        </div>

      </div>
    </div>
  );
}