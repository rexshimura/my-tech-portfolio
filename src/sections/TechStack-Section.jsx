import React from 'react';
import { Terminal } from 'lucide-react';

export default function TechStackSection() {
  const categories = [
    { 
      title: "Frameworks, Markup, Styles & Tools", 
      skills: ["React", "React Native", "Expo", "Inertia.js", "Next.js", "Vue", "Vite", "Laravel", "Tailwind CSS", "Bootstrap", "Xendit", "HTML5", "CSS3", "HTML", "CSS"] 
    },
    { 
      title: "Languages", 
      skills: ["JS", "TS", "PHP", "Java", "Python", "C", "C++", "C#", "SQL", "Bash", "Shell Scripting"] 
    },
    { 
      title: "Backend, Cloud & AI", 
      skills: ["Node.js", "Google Firebase", "AWS", "Vercel", "Flask", "Django", "Groq AI", "Gemini AI", "OpenAI API", "Supabase"] 
    },
    { 
      title: "IoT & Networking", 
      skills: ["Arduino UNO", "Raspberry Pi", "ESP32", "Sensors", "Cisco Packet Tracer", "VLSM", "IP Subnetting"] 
    },
    { 
      title: "Databases & GUI", 
      skills: ["MySQL", "PostgreSQL", "MongoDB", "Firestore", "QT Designer", "Figma"] 
    },
    { 
      title: "Tools & Productivity", 
      skills: ["Git", "GitHub", "VS Code", "Notion", "Trello", "Jetbrains", "Arduino IDE", "ClickUp", "Photoshop", "Canva"] 
    }
  ];

  return (
    <div className="p-8 rounded-3xl border border-gray-200 dark:border-white/10 bg-white/40 dark:bg-zinc-950/20 backdrop-blur-md shadow-sm transition-all duration-300">
      {/* Header */}
      <div className="flex justify-between items-center mb-10">
        <div className="flex items-center gap-3">
          <Terminal size={22} className="text-gray-900 dark:text-white" />
          <h2 className="text-xl font-bold text-gray-900 dark:text-white tracking-tight">Tech Stack</h2>
        </div>
      </div>
      
      {/* Grid Layout for Categories */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
        {categories.map((cat) => (
          <div key={cat.title} className="space-y-4">
            <h3 className="text-[11px] font-black text-gray-900 dark:text-white/80 uppercase tracking-[0.2em]">
              {cat.title}
            </h3>
            <div className="flex flex-wrap gap-2">
              {cat.skills.map(skill => (
                <span 
                  key={skill} 
                  className="px-3 py-1 rounded-lg border border-gray-200 dark:border-white/10 bg-gray-50 dark:bg-white/5 text-xs font-medium text-gray-600 dark:text-gray-400 hover:bg-blue-500/5 dark:hover:bg-blue-500/10 hover:text-blue-600 dark:hover:text-blue-400 hover:border-blue-500/20 dark:hover:border-blue-500/30 transition-all duration-200 cursor-default"
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