import React, { useState, useRef, useEffect } from 'react';
import { MapPin, Code2, BadgeCheck, ArrowUpRight, FolderCode, Send, Mail, Copy, Check } from 'lucide-react';

export default function HeroSection() {
  const [isHovered, setIsHovered] = useState(false);
  const [showEmails, setShowEmails] = useState(false);
  const [copiedIndex, setCopiedIndex] = useState(null);
  const popoverRef = useRef(null);

  const emails = [
    "mortpauljpm03@gmail.com",
    "rexshimura.tech.jp@gmail.com"
  ];

  useEffect(() => {
    function handleClickOutside(event) {
      if (popoverRef.current && !popoverRef.current.contains(event.target)) {
        setShowEmails(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleCopy = (email, index) => {
    navigator.clipboard.writeText(email);
    setCopiedIndex(index);
    setTimeout(() => setCopiedIndex(null), 2000);
  };

  const scrollToProjects = () => {
    window.scrollTo({
      top: document.getElementById('projects-section')?.offsetTop - 80,
      behavior: 'smooth'
    });
  };

  return (
    <section className="relative overflow-hidden rounded-[40px] border border-gray-200 dark:border-white/10 bg-white dark:bg-zinc-950/40 p-8 md:p-16 shadow-xl transition-all duration-300">
      {/* Background Ambient Glows */}
      <div className="absolute -top-24 -left-24 w-96 h-96 bg-blue-500/10 dark:bg-blue-500/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-indigo-500/10 dark:bg-indigo-500/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-12">
        
        {/* LEFT COLUMN: Main Copy & CTAs */}
        <div className="text-center lg:text-left space-y-6 max-w-2xl order-2 lg:order-1">
          
          {/* Nickname & Socials Badge with Tooltips */}
          <div className="relative inline-flex items-center gap-3 px-4 py-2 rounded-full bg-blue-500/10 text-blue-600 dark:text-blue-400 border border-blue-500/20 shadow-sm mx-auto lg:mx-0 transition-all hover:border-blue-500/40">
            <span className="uppercase tracking-[0.2em] text-[10px] font-black border-r border-blue-500/20 pr-3 dark:text-white text-gray-900">
              Yizaha | Rexshimura
            </span>
            <div className="flex items-center gap-3.5">
              
              {/* GitHub Link + Tooltip */}
              <div className="relative group/tooltip flex items-center justify-center">
                <a 
                  href="https://github.com/rexshimura" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-gray-500 dark:text-gray-400 hover:text-blue-500 dark:hover:text-blue-400 transition-colors"
                  aria-label="GitHub"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path><path d="M9 18c-4.51 2-5-2-7-2"></path></svg>
                </a>
                <span className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2 py-1 bg-gray-900 dark:bg-zinc-800 text-white text-[10px] font-bold rounded-md opacity-0 pointer-events-none group-hover/tooltip:opacity-100 transition-opacity duration-200 shadow-md whitespace-nowrap z-50">
                  View Github Account
                </span>
              </div>

              {/* Instagram Link + Tooltip */}
              <div className="relative group/tooltip flex items-center justify-center">
                <a 
                  href="https://www.instagram.com/rexshimura/" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-gray-500 dark:text-gray-400 hover:text-blue-500 dark:hover:text-blue-400 transition-colors"
                  aria-label="Instagram"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line></svg>
                </a>
                <span className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2 py-1 bg-gray-900 dark:bg-zinc-800 text-white text-[10px] font-bold rounded-md opacity-0 pointer-events-none group-hover/tooltip:opacity-100 transition-opacity duration-200 shadow-md whitespace-nowrap z-50">
                  View Instagram
                </span>
              </div>
              
              {/* Mail Button + Tooltip */}
              <div className="relative group/tooltip flex items-center justify-center">
                <button 
                  onClick={() => setShowEmails(!showEmails)}
                  className={`transition-colors p-0.5 rounded ${showEmails ? 'text-blue-500' : 'text-gray-500 dark:text-gray-400 hover:text-blue-500 dark:hover:text-blue-400'}`}
                  aria-label="View Contact Emails"
                >
                  <Mail size={14} strokeWidth={2.5} />
                </button>
                {!showEmails && (
                  <span className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2 py-1 bg-gray-900 dark:bg-zinc-800 text-white text-[10px] font-bold rounded-md opacity-0 pointer-events-none group-hover/tooltip:opacity-100 transition-opacity duration-200 shadow-md whitespace-nowrap z-50">
                    View Active Emails
                  </span>
                )}
              </div>

            </div>

            {/* Email Selection Popover Menu */}
            {showEmails && (
              <div 
                ref={popoverRef}
                className="absolute left-1/2 -translate-x-1/2 lg:left-full lg:translate-x-3 top-full lg:top-1/2 lg:-translate-y-1/2 mt-3 lg:mt-0 z-50 w-72 rounded-2xl border border-gray-200 dark:border-white/10 bg-white dark:bg-zinc-900 p-3 shadow-xl backdrop-blur-md transition-all animate-in fade-in slide-in-from-top-2 duration-200"
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
                        className="text-xs font-semibold text-gray-700 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 transition-colors truncate max-w-[190px]"
                        title={`Mail to ${email}`}
                      >
                        {email}
                      </a>
                      <button
                        onClick={() => handleCopy(email, idx)}
                        className="shrink-0 p-1.5 rounded-lg bg-gray-200/50 dark:bg-white/5 text-gray-400 hover:text-gray-700 dark:hover:text-white transition-colors"
                        title="Copy to clipboard"
                      >
                        {copiedIndex === idx ? (
                          <Check size={12} className="text-emerald-500 animate-in zoom-in-50 duration-150" />
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

          {/* Verified Name */}
          <div className="space-y-2">
            <div className="flex items-center justify-center lg:justify-start gap-3">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 dark:text-white tracking-tight leading-none">
                John Paul P. Mahilom
              </h1>
              <BadgeCheck 
                size={32} 
                className="text-blue-500 fill-blue-500/10 shrink-0 mt-1" 
                strokeWidth={2.5}
              />
            </div>
            
            {/* Animated Typing Title */}
            <div className="flex items-center justify-center lg:justify-start gap-2 h-12">
              <Code2 size={24} className="text-blue-500 shrink-0 hidden md:block" />
              <img 
                src="https://readme-typing-svg.herokuapp.com?font=Plus+Jakarta+Sans&weight=700&size=22&pause=1000&color=3B82F6&center=false&vCenter=true&width=500&lines=React+%26+Laravel+Developer;System+Planner+%26+Architect;AI+%26+NLP+Enthusiast;Future+Mobile+Developer" 
                alt="Typing Title" 
                className="h-10 mx-auto lg:mx-0"
              />
            </div>
          </div>

          {/* Subheading / Hook */}
          <p className="text-base md:text-lg text-gray-500 dark:text-gray-400 font-medium leading-relaxed max-w-2xl">
            Just a simple 4th-year CTU student who literally codes for food. I mostly spend my time messing around with <span className="text-gray-900 dark:text-white font-semibold">UI/UX prototyping</span>, building clean <span className="text-gray-900 dark:text-white font-semibold">frontend interfaces</span>, and mapping out <span className="text-gray-900 dark:text-white font-semibold">system architectures and flows</span>.
          </p>

          {/* Metadata */}
          <div className="flex items-center justify-center lg:justify-start gap-2 text-sm text-gray-400 dark:text-gray-500 font-medium">
            <MapPin size={16} className="text-gray-400" />
            <span>Cebu, Philippines</span>
          </div>

          {/* HERO CALL-TO-ACTIONS */}
          <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-4">
            <button 
              onClick={scrollToProjects}
              className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs uppercase tracking-widest transition-all flex items-center justify-center gap-2 shadow-lg shadow-blue-500/20 active:scale-95 group"
            >
              <FolderCode size={16} /> View Projects
              <ArrowUpRight size={14} className="opacity-60 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </button>
            
            <a 
              href="mailto:rexshimura.tech.jp@gmail.com"
              className="w-full sm:w-auto px-8 py-4 rounded-2xl border border-gray-200 dark:border-white/10 text-gray-700 dark:text-gray-300 font-bold text-xs uppercase tracking-widest transition-all flex items-center justify-center gap-2 hover:bg-gray-50 dark:hover:bg-white/5 active:scale-95"
            >
              <Send size={14} /> Let's Talk
            </a>
          </div>
        </div>

        {/* RIGHT COLUMN: Profile Avatar Frame with Wide-Screen Scaling */}
        {/* CHANGED: Handled dynamic width/height values via responsive classes */}
        <div className="relative shrink-0 order-1 lg:order-2">
          
          {/* Dark Mode Exclusive Spinning Gradient Background Aura */}
          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500 via-cyan-500 to-teal-500 dark:opacity-40 opacity-0 blur-xl scale-110 animate-[spin_8s_linear_infinite] animate-pulse pointer-events-none transition-opacity duration-500" />
          
          {/* Decorative Dashed Outer Ring Shapes */}
          <div className="absolute inset-0 rounded-full border border-dashed border-blue-500/30 dark:border-blue-500/20 scale-125 animate-[spin_60s_linear_infinite]" />
          <div className="absolute inset-0 rounded-full border border-gray-200 dark:border-white/5 scale-110" />

          <div 
            className="relative cursor-pointer group"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            {/* Main Circle Photo Container */}
            {/* CHANGED: Swapped static framework bounds for responsive classes (w-48 h-48 md:w-56 md:h-56 lg:w-72 lg:h-72) */}
            <div className="w-48 h-48 md:w-56 md:h-56 lg:w-72 lg:h-72 rounded-full overflow-hidden border-[3px] border-white dark:border-zinc-900 ring-8 ring-gray-100/80 dark:ring-white/[0.02] shadow-2xl transition-all duration-500 group-hover:ring-blue-500/20 group-hover:scale-105 relative z-10">
              {/* Image 1 */}
              <img 
                src="/id/me.jpg" 
                alt="John Paul P. Mahilom" 
                className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ${isHovered ? 'opacity-0' : 'opacity-100'}`}
              />
              {/* Image 2 (Hover) */}
              <img 
                src="/id/me3.jpg" 
                alt="John Paul P. Mahilom Alternate" 
                className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ${isHovered ? 'opacity-100' : 'opacity-0'}`}
              />
            </div>
            
            {/* Pulsing Active Status Dot */}
            {/* CHANGED: Adjusted location classes slightly to fit perfectly on the expanded frame sizes */}
            <div className="absolute bottom-4 right-4 lg:bottom-7 lg:right-7 w-5 h-5 bg-emerald-500 border-4 border-white dark:border-zinc-950 rounded-full shadow-md z-30 animate-pulse"></div>
          </div>
        </div>

      </div>
    </section>
  );
}