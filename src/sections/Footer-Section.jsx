import React from 'react';
import { 
  Github, 
  Linkedin, 
  Facebook, 
  Instagram, 
  Mail, 
  BookOpen, 
  Music2 
} from 'lucide-react';

export default function FooterSection() {
  // We keep your professional email here for the popping bubble text
  const myEmail = "rexshimura.tech.jp@gmail.com";
  const APP_VERSION = "v1.2.9";

  const socialLinks = [
    { name: 'GitHub', icon: <Github size={18} />, url: 'https://github.com/rexshimura' },
    { name: 'LinkedIn', icon: <Linkedin size={18} />, url: 'https://www.linkedin.com/in/john-paul-mahilom-2557b7397/' },
    { name: 'ResearchGate', icon: <BookOpen size={18} />, url: 'https://www.researchgate.net/profile/John-Paul-Mahilom?ev=hdr_xprf' },
    { name: myEmail, icon: <Mail size={18} />, url: `mailto:${myEmail}` }, 
    { name: 'Facebook', icon: <Facebook size={18} />, url: 'https://www.facebook.com/jp.mahilom.2024' },
    { name: 'Instagram', icon: <Instagram size={18} />, url: 'https://www.instagram.com/rexshimura/' },
    { name: 'TikTok', icon: <Music2 size={18} />, url: 'https://www.tiktok.com/@rexshimura' },
  ];

  return (
    <footer className="relative pt-16 pb-8 border-t border-gray-200 dark:border-white/5 flex flex-col items-center gap-6 px-4 overflow-visible font-sans">
      
      {/* Top Row: Brand & Socials */}
      <div className="w-full flex flex-col md:flex-row justify-between items-center gap-6 md:gap-10">
        
        {/* Brand Section: Rexshimura / RavenLabs */}
        <div className="flex items-center gap-3.5 group cursor-default select-none">
          <div className="relative shrink-0">
            <img 
              src="/logos/ravenlabs.png" 
              alt="RavenLabs" 
              className="w-10 h-10 object-contain dark:brightness-125 transition-transform duration-500 group-hover:rotate-12"
              onError={(e) => {
                e.target.style.display = 'none';
                if (e.target.parentNode) {
                  e.target.parentNode.innerHTML = '<div class="w-10 h-10 rounded-full bg-blue-500/20 border border-blue-500/30 flex items-center justify-center text-blue-500 font-bold text-sm">JP</div>';
                }
              }}
            />
            <div className="absolute -inset-1 bg-blue-500/20 blur-lg rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
          </div>
          
          <div className="flex flex-col text-left">
            <h2 className="text-sm font-black uppercase tracking-widest text-gray-900 dark:text-white leading-none">
              RavenLabs Development
            </h2>
            <p className="text-[9px] font-bold text-gray-400 uppercase tracking-widest mt-1">
              BY: Rexshimura | Yizaha
            </p>
          </div>
        </div>

        {/* Social Links with "Floating Bubble" Above */}
        <div className="flex flex-wrap justify-center gap-5 sm:gap-8 md:gap-10 overflow-visible">
          {socialLinks.map((link) => (
            <div key={link.name} className="relative group flex flex-col items-center overflow-visible">
              
              {/* THE POPPING BUBBLE */}
              <div className="absolute bottom-full z-[100] mb-2 pointer-events-none select-none">
                <div className="opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300 ease-out">
                  <div className="relative px-3.5 py-1.5 rounded-xl bg-gray-950 dark:bg-white shadow-[0_10px_25px_rgba(0,0,0,0.4)] flex items-center justify-center">
                    
                    {/* Tooltip Arrow pointing DOWN */}
                    <div className="absolute top-full left-1/2 -translate-x-1/2 border-[5px] border-transparent border-t-gray-950 dark:border-t-white" />
                    
                    <span className="text-[10px] font-bold uppercase tracking-wider text-white dark:text-black whitespace-nowrap">
                      {link.name}
                    </span>
                  </div>
                </div>
              </div>

              {/* CLICKABLE BUTTON */}
              <a
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="relative z-10 text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300 hover:scale-125 block p-2 sm:p-2.5 select-none sfx-bop cursor-target"
                aria-label={link.name}
              >
                {link.icon}
              </a>
            </div>
          ))}
        </div>

      </div>

      {/* Bottom-most Row: Version Badge on Left, Copyright on Right */}
      <div className="w-full pt-4 border-t border-gray-200/50 dark:border-white/5 flex flex-col sm:flex-row justify-between items-center gap-3">
        
        {/* Version Badge (Left Side) */}
        <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-gray-100/80 dark:bg-zinc-900/80 border border-gray-200 dark:border-white/10 select-none">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
          </span>
          <span className="text-xs font-black text-gray-700 dark:text-gray-200 uppercase tracking-widest">
            {APP_VERSION}
          </span>
        </div>

        {/* Copyright Tagline (Right Side) */}
        <p className="text-[10px] font-bold text-gray-500 dark:text-gray-400 uppercase tracking-widest select-none text-center sm:text-right">
          © 2026 | All Rights Reserved | Rexshimura / RavenLabs
        </p>

      </div>

    </footer>
  );
}