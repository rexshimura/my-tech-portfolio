import React, { useState, useEffect, useMemo } from 'react';

export default function Loader({ onComplete }) {
  const [step, setStep] = useState(1);
  const [isExiting, setIsExiting] = useState(false);

  // Detect the saved theme immediately during the first render
  const isDarkMode =
    localStorage.getItem('theme') === 'dark';

  // Light mode sequences
  const lightSequences = useMemo(() => [
    [1, 2, 3],
    [1, 6, 5],
    [7, 3, 4],
    [7, 6, 3],
    [7, 5, 1],
    [10, 5, 9],
    [1, 8, 9]
  ], []);

  // Select the correct sequence immediately
  const [currentSequence] = useState(() => {
    const savedTheme =
      localStorage.getItem('theme') || 'light';

    if (savedTheme === 'dark') {
      return [11, 12, 13];
    }

    return lightSequences[
      Math.floor(Math.random() * lightSequences.length)
    ];
  });

  useEffect(() => {
    // Preload all selected GIFs
    currentSequence.forEach((num) => {
      const img = new Image();
      img.src = `/gif/wait${num}.gif`;
    });

    const timers = [
      setTimeout(() => setStep(2), 1200),

      setTimeout(() => setStep(3), 2400),

      setTimeout(() => setIsExiting(true), 3600),

      setTimeout(() => onComplete(), 4400)
    ];

    return () => {
      timers.forEach(clearTimeout);
    };

  }, [currentSequence, onComplete]);

  return (
    <div
      className={`
        fixed inset-0 z-[999]
        flex flex-col items-center justify-center
        pointer-events-none
        transition-all duration-700
        ease-[cubic-bezier(0.76,0,0.24,1)]

        ${
          isExiting
            ? 'opacity-0 bg-transparent backdrop-blur-sm'
            : isDarkMode
              ? 'opacity-100 bg-[#050505]'
              : 'opacity-100 bg-white'
        }
      `}
    >

      <div
        className={`
          flex flex-col
          items-center
          justify-center
          gap-6

          transition-all
          duration-[800ms]
          ease-[cubic-bezier(0.76,0,0.24,1)]

          ${
            isExiting
              ? 'scale-125 blur-xl opacity-0 -translate-y-12'
              : 'scale-100 blur-0 opacity-100 translate-y-0'
          }
        `}
      >

        {/* GIF STACK */}

        <div className="relative w-32 h-32 md:w-48 md:h-48">

          {/* FIRST GIF */}

          <img
            src={`/gif/wait${currentSequence[0]}.gif`}
            alt="Loading Sequence Part 1"
            className={`
              absolute inset-0
              w-full h-full
              object-contain
              transition-opacity duration-300

              ${
                step === 1
                  ? 'opacity-100'
                  : 'opacity-0'
              }
            `}
          />

          {/* SECOND GIF */}

          <img
            src={`/gif/wait${currentSequence[1]}.gif`}
            alt="Loading Sequence Part 2"
            className={`
              absolute inset-0
              w-full h-full
              object-contain
              transition-opacity duration-300

              ${
                step === 2
                  ? 'opacity-100'
                  : 'opacity-0'
              }
            `}
          />

          {/* THIRD GIF */}

          <img
            src={`/gif/wait${currentSequence[2]}.gif`}
            alt="Loading Sequence Part 3"
            className={`
              absolute inset-0
              w-full h-full
              object-contain
              transition-opacity duration-300

              ${
                step >= 3
                  ? 'opacity-100'
                  : 'opacity-0'
              }
            `}
          />

        </div>


        {/* LOADING TEXT */}

        <div
          className={`
            flex
            items-center
            gap-1
            mt-2
            text-[10px]
            font-mono
            font-bold
            uppercase
            tracking-widest

            ${
              isDarkMode
                ? 'text-gray-400'
                : 'text-gray-500'
            }
          `}
        >

          <span className="animate-pulse">
            Loading Workspace
          </span>

          <span className="animate-[bounce_1s_infinite]">
            .
          </span>

          <span className="animate-[bounce_1s_infinite_100ms]">
            .
          </span>

          <span className="animate-[bounce_1s_infinite_200ms]">
            .
          </span>

        </div>

      </div>

    </div>
  );
}

