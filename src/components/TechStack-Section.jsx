import React from 'react';
import { Terminal } from 'lucide-react';

export default function TechStackSection() {
  const categories = [
    { 
      title: "Frameworks & Build Tools", 
      skills: ["React", "React Native", "Inertia", "Next.js", "Vue", "Laravel", "Tailwind CSS"] 
    },
    { 
      title: "Languages", 
      skills: ["JS", "TS", "PHP", "Java", "Python", "C", "C++", "C#"] 
    },
    { 
      // Updated to focus on Groq AI and Inference
      title: "Backend, Cloud & AI", 
      skills: ["Node.js", "Firebase", "Vercel", "Flask", "Django", "Groq AI"] 
    },
    { 
      title: "IoT & Networking", 
      skills: ["Arduino", "Cisco Packet Tracer", "VLSM", "IP Subnetting"] 
    },
    { 
      title: "Databases & GUI", 
      skills: ["MySQL", "PostgreSQL", "QT Designer", "Figma"] 
    },
    { 
      title: "Tools & Productivity", 
      skills: ["Git", "GitHub", "VS Code", "Notion", "Trello", "ClickUp", "Photoshop", "Canva"] 
    }
  ];

  return (
    <div className="p-8 rounded-3xl border border-gray-200 dark:border-white/10 bg-white dark:bg-white/5 shadow-sm transition-all duration-300">
      <div className="flex justify-between items-center mb-10">
        <div className="flex items-center gap-3">
          <Terminal size={22} className="text-black dark:text-white" />
          <h2 className="text-xl font-bold text-gray-900 dark:text-white tracking-tight">Tech Stack</h2>
        </div>
        {/* <button className="text-[10px] font-bold uppercase tracking-widest text-gray-400 hover:text-blue-500 transition-colors">
          View All &gt;
        </button> */}
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
        {categories.map((cat) => (
          <div key={cat.title} className="space-y-4">
            <h3 className="text-[11px] font-black text-black dark:text-white/80 uppercase tracking-[0.2em]">
              {cat.title}
            </h3>
            <div className="flex flex-wrap gap-2">
              {cat.skills.map(skill => (
                <span 
                  key={skill} 
                  className="px-3 py-1 rounded-lg border border-gray-200 dark:border-white/5 bg-gray-50 dark:bg-white/[0.03] text-xs font-medium text-gray-600 dark:text-gray-400 hover:border-blue-500/50 hover:text-blue-600 dark:hover:text-blue-400 transition-all cursor-default"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}