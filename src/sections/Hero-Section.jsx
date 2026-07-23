import React, { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { MapPin, Code2, BadgeCheck, ArrowUpRight, FolderCode, Send, Mail, Copy, Check, Linkedin } from 'lucide-react';

export default function HeroSection({ onOpenCurious }) {
  const navigate = useNavigate();

  const [isHovered, setIsHovered] = useState(false);
  const [showEmails, setShowEmails] = useState(false);
  const [copiedIndex, setCopiedIndex] = useState(null);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 1024);

  const popoverRef = useRef(null);

  const emails = [
    "mortpauljpm03@gmail.com",
    "rexshimura.tech.jp@gmail.com"
  ];

  // Track window size to toggle SVG text alignment
  useEffect(() => {
    function handleResize() {
      setIsMobile(window.innerWidth < 1024);
    }

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    function handleClickOutside(event) {
      if (popoverRef.current && !popoverRef.current.contains(event.target)) {
        setShowEmails(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleCopy = (email, index) => {
    navigator.clipboard.writeText(email);

    setCopiedIndex(index);

    setTimeout(() => {
      setCopiedIndex(null);
    }, 2000);
  };

  const handleCheckMyWork = () => {
    navigate('/projects');
  };

  return (
    <section className="relative overflow-hidden rounded-[40px] border border-gray-200 dark:border-white/10 bg-white dark:bg-zinc-950/40 p-8 md:p-14 shadow-xl transition-all duration-300">

      {/* Background Ambient Glows */}
      <div className="absolute -top-24 -left-24 w-96 h-96 bg-blue-500/10 dark:bg-blue-500/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-indigo-500/10 dark:bg-indigo-500/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="relative z-10 flex flex-col lg:flex-row items-center lg:items-start xl:items-center gap-10 xl:gap-14">

        {/* PROFILE IMAGE */}
        <div className="relative shrink-0">

          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500 via-cyan-500 to-teal-500 dark:opacity-40 opacity-0 blur-xl scale-110 animate-[spin_8s_linear_infinite] animate-pulse pointer-events-none transition-opacity duration-500" />

          <div className="absolute inset-0 rounded-full border border-dashed border-blue-500/30 dark:border-blue-500/20 scale-125 animate-[spin_60s_linear_infinite]" />

          <div className="absolute inset-0 rounded-full border border-gray-200 dark:border-white/5 scale-110" />

          <div
            className="relative cursor-pointer group cursor-target"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            onClick={onOpenCurious}
            title="Click to check me out!"
          >

            <div className="w-44 h-44 md:w-52 md:h-52 lg:w-64 lg:h-64 rounded-full overflow-hidden border-[3px] border-white dark:border-zinc-900 ring-8 ring-gray-100/80 dark:ring-white/[0.02] shadow-2xl transition-all duration-500 group-hover:ring-blue-500/20 group-hover:scale-105 relative z-10">

              <img
                src="/id/me.jpg"
                alt="John Paul P. Mahilom"
                className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ${
                  isHovered ? 'opacity-0' : 'opacity-100'
                }`}
              />

              <img
                src="/id/me3.jpg"
                alt="John Paul P. Mahilom Alternate"
                className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ${
                  isHovered ? 'opacity-100' : 'opacity-0'
                }`}
              />

            </div>

            <div className="absolute bottom-3 right-3 lg:bottom-6 lg:right-6 w-5 h-5 bg-emerald-500 border-4 border-white dark:border-zinc-950 rounded-full shadow-md z-30 animate-pulse" />

          </div>
        </div>

        {/* RIGHT COLUMN */}
        <div className="text-center lg:text-left space-y-5 flex-1 w-full max-w-2xl">

          {/* TAG & SOCIAL LINKS */}
          <div className="relative inline-flex items-center gap-3 px-4 py-2 rounded-full bg-blue-500/10 text-blue-600 dark:text-blue-400 border border-blue-500/20 shadow-sm mx-auto lg:mx-0 transition-all hover:border-blue-500/40">

            <span className="uppercase tracking-[0.2em] text-[10px] font-black border-r border-blue-500/20 pr-3 dark:text-white text-gray-900">
              Yizaha | Rexshimura
            </span>

            <div className="flex items-center gap-3.5">

              {/* GitHub */}
              <div className="relative group/tooltip flex items-center justify-center">

                <a
                  href="https://github.com/rexshimura"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cursor-target text-gray-500 dark:text-gray-400 hover:text-blue-500 dark:hover:text-blue-400 transition-colors"
                  aria-label="GitHub"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                    <path d="M9 18c-4.51 2-5-2-7-2" />
                  </svg>
                </a>

                <span className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2 py-1 bg-gray-900 dark:bg-zinc-800 text-white text-[10px] font-bold rounded-md opacity-0 pointer-events-none group-hover/tooltip:opacity-100 transition-opacity duration-200 shadow-md whitespace-nowrap z-50">
                  GitHub
                </span>

              </div>

              {/* LinkedIn */}
              <div className="relative group/tooltip flex items-center justify-center">

                <a
                  href="https://www.linkedin.com/in/john-paul-mahilom-2557b7397/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cursor-target text-gray-500 dark:text-gray-400 hover:text-blue-500 dark:hover:text-blue-400 transition-colors"
                  aria-label="LinkedIn"
                >
                  <Linkedin size={14} strokeWidth={2.5} />
                </a>

                <span className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2 py-1 bg-gray-900 dark:bg-zinc-800 text-white text-[10px] font-bold rounded-md opacity-0 pointer-events-none group-hover/tooltip:opacity-100 transition-opacity duration-200 shadow-md whitespace-nowrap z-50">
                  LinkedIn
                </span>

              </div>

              {/* Email Button */}
              <div className="relative group/tooltip flex items-center justify-center">

                <button
                  onClick={() => setShowEmails(!showEmails)}
                  className={`cursor-target transition-colors p-0.5 rounded ${
                    showEmails
                      ? 'text-blue-500'
                      : 'text-gray-500 dark:text-gray-400 hover:text-blue-500 dark:hover:text-blue-400'
                  }`}
                  aria-label="View Contact Emails"
                >
                  <Mail size={14} strokeWidth={2.5} />
                </button>

                {!showEmails && (
                  <span className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2 py-1 bg-gray-900 dark:bg-zinc-800 text-white text-[10px] font-bold rounded-md opacity-0 pointer-events-none group-hover/tooltip:opacity-100 transition-opacity duration-200 shadow-md whitespace-nowrap z-50">
                    Emails
                  </span>
                )}

              </div>

            </div>

            {showEmails && (
              <div
                ref={popoverRef}
                className="absolute left-1/2 -translate-x-1/2 lg:left-0 lg:translate-x-0 top-full mt-3 z-50 w-72 rounded-2xl border border-gray-200 dark:border-white/10 bg-white dark:bg-zinc-900 p-3 shadow-xl backdrop-blur-md transition-all animate-in fade-in slide-in-from-top-2 duration-200"
              >

                <p className="text-[10px] font-bold uppercase tracking-wider text-gray-400 dark:text-gray-500 mb-2 px-2 text-left">
                  Active Contact Addresses
                </p>

                <div className="space-y-1">

                  {emails.map((email, idx) => (
                    <div
                      key={idx}
                      className="flex items-center justify-between gap-2 px-2.5 py-2 rounded-xl text-left bg-gray-50 dark:bg-white/[0.02] border border-gray-100 dark:border-white/[0.04]"
                    >

                      <a
                        href={`mailto:${email}`}
                        className="cursor-target text-xs font-semibold text-gray-700 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 transition-colors truncate max-w-[190px]"
                        title={`Mail to ${email}`}
                      >
                        {email}
                      </a>

                      <button
                        onClick={() => handleCopy(email, idx)}
                        className="cursor-target shrink-0 p-1.5 rounded-lg bg-gray-200/50 dark:bg-white/5 text-gray-400 hover:text-gray-700 dark:hover:text-white transition-colors"
                        title="Copy to clipboard"
                      >

                        {copiedIndex === idx ? (
                          <Check
                            size={12}
                            className="text-emerald-500 animate-in zoom-in-50 duration-150"
                          />
                        ) : (
                          <Copy size={12} />
                        )}

                      </button>

                    </div>
                  ))}

                </div>

              </div>
            )}

          </div>

          {/* NAME & ANIMATED TITLE */}
          <div className="space-y-1">

            <div className="flex items-center justify-center lg:justify-start gap-3">

              <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-gray-900 dark:text-white tracking-tight leading-none">
                John Paul P. Mahilom
              </h1>

              <BadgeCheck
                size={28}
                className="text-blue-500 fill-blue-500/10 shrink-0"
                strokeWidth={2.5}
              />

            </div>

            {/* Always display Code2 icon on both mobile and desktop */}
            <div className="flex items-center justify-center lg:justify-start gap-2 h-10 w-full">

              <Code2
                size={20}
                className="text-blue-500 shrink-0"
              />

              <img
                src={`https://readme-typing-svg.herokuapp.com?font=Plus+Jakarta+Sans&weight=700&size=20&pause=1000&color=3B82F6&center=${isMobile ? 'true' : 'false'}&vCenter=true&width=450&lines=Full+Stack+Dev+%26+UI%2FUX;Aspiring+AI+Engineer;Automation+%26+Systems+Architect`}
                alt="Typing Title"
                className="h-9 max-w-full object-contain"
              />

            </div>

          </div>

          {/* INTRO */}
          <p className="text-base text-gray-600 dark:text-gray-300 font-medium leading-relaxed">

            Hello! I'm a simple CTU student who literally codes for food. I mostly spend my time messing around with{' '}

            <span className="text-gray-900 dark:text-white font-bold">
              UI/UX prototyping
            </span>
            , building clean{' '}

            <span className="text-gray-900 dark:text-white font-bold">
              frontend interfaces
            </span>
            , and mapping out{' '}

            <span className="text-gray-900 dark:text-white font-bold">
              system architectures and flows
            </span>{' '}

            — constantly exploring AI tools and desktop automation along the way.

          </p>

          {/* LOCATION WITH PHILIPPINES FLAG */}
          <div className="flex items-center justify-center lg:justify-start gap-2 text-xs text-gray-400 dark:text-gray-500 font-semibold uppercase tracking-wider">

            <MapPin
              size={14}
              className="text-blue-500"
            />

            <span>
              Cebu, Philippines
            </span>

            <span className="text-sm leading-none" role="img" aria-label="Philippines Flag">
              🇵🇭
            </span>

          </div>

          {/* CTA */}
          <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3.5 pt-2">

            <button
              onClick={handleCheckMyWork}
              className="cursor-target w-full sm:w-auto px-7 py-3.5 rounded-2xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs uppercase tracking-widest transition-all flex items-center justify-center gap-2 shadow-lg shadow-blue-500/20 active:scale-95 group"
            >

              <FolderCode size={16} />

              Check My Work

              <ArrowUpRight
                size={14}
                className="opacity-60 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
              />

            </button>

            <a
              href="mailto:rexshimura.tech.jp@gmail.com"
              className="cursor-target w-full sm:w-auto px-7 py-3.5 rounded-2xl border border-gray-200 dark:border-white/10 text-gray-700 dark:text-gray-300 font-bold text-xs uppercase tracking-widest transition-all flex items-center justify-center gap-2 hover:bg-gray-50 dark:hover:bg-white/5 active:scale-95"
            >

              <Send size={14} />

              Say Hi

            </a>

          </div>

        </div>

      </div>

    </section>
  );
}