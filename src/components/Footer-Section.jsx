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

  const socialLinks = [
    { name: 'GitHub', icon: <Github size={20} />, url: 'https://github.com/rexshimura' },
    { name: 'LinkedIn', icon: <Linkedin size={20} />, url: 'https://www.linkedin.com/in/john-paul-mahilom-2557b7397/' },
    { name: 'ResearchGate', icon: <BookOpen size={20} />, url: 'https://www.researchgate.net/profile/John-Paul-Mahilom?ev=hdr_xprf' },
    { name: myEmail, icon: <Mail size={20} />, url: `mailto:${myEmail}` }, 
    { name: 'Facebook', icon: <Facebook size={20} />, url: 'https://www.facebook.com/jp.mahilom.2024' },
    { name: 'Instagram', icon: <Instagram size={20} />, url: 'https://www.instagram.com/rexshimura/' },
    { name: 'TikTok', icon: <Music2 size={20} />, url: 'https://www.tiktok.com/@rexshimura' },
  ];

  return (
    <footer className="relative pt-24 pb-16 border-t border-gray-200 dark:border-white/5 flex flex-col md:flex-row justify-between items-center gap-12 px-4 overflow-visible">
      
      {/* Brand Section: Rexshimura / RavenLabs */}
      <div className="flex items-center gap-4 group cursor-default select-none">
        <div className="relative">
          <img 
            src="/logos/ravenlabs.png" 
            alt="RavenLabs" 
            className="w-10 h-10 object-contain dark:brightness-125 transition-transform duration-500 group-hover:rotate-12"
          />
          <div className="absolute -inset-1 bg-blue-500/20 blur-lg rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
        </div>
        
        <div className="flex flex-col">
          <h2 className="text-xl font-mono font-bold text-gray-900 dark:text-white tracking-tighter uppercase">
            Rexshimura
          </h2>
          <p className="text-[10px] font-mono font-medium text-black/80 dark:text-white/80 uppercase tracking-[0.3em]">
            RavenLabs Development
          </p>
        </div>
      </div>

      {/* Social Links with "Floating Bubble" Above */}
      <div className="flex flex-wrap justify-center gap-10 md:gap-14 overflow-visible">
        {socialLinks.map((link) => (
          <div key={link.name} className="relative group flex flex-col items-center overflow-visible">
            
            {/* THE POPPING BUBBLE - Shows the Email Address itself for the Mail icon */}
            <div className="absolute bottom-full z-[100] mb-2 pointer-events-none select-none">
              <div className="opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300 ease-out">
                <div className="relative px-4 py-2 rounded-2xl bg-gray-950 dark:bg-white shadow-[0_10px_25px_rgba(0,0,0,0.4)] flex items-center justify-center">
                  
                  {/* Tooltip Arrow pointing DOWN */}
                  <div className="absolute top-full left-1/2 -translate-x-1/2 border-[6px] border-transparent border-t-gray-950 dark:border-t-white" />
                  
                  <span className="text-[10px] font-mono font-black uppercase tracking-[0.15em] text-white dark:text-black whitespace-nowrap">
                    {link.name}
                  </span>
                </div>
              </div>
            </div>

            {/* CLICKABLE BUTTON - Direct link, no more Modal */}
            <a
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="relative z-10 text-gray-400 dark:text-gray-500 hover:text-blue-500 dark:hover:text-blue-400 transition-all duration-300 hover:scale-125 block p-3 select-none"
              aria-label={link.name}
            >
              {link.icon}
            </a>
          </div>
        ))}
      </div>

      <p className="text-[10px] font-mono text-gray-500 uppercase tracking-widest hidden lg:block select-none">
        © 2026 / Systems Architect
      </p>
    </footer>
  );
}