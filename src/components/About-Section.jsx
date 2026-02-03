import { Briefcase } from 'lucide-react';

export default function AboutSection() {
  return (
    <div className="p-8 rounded-3xl border border-gray-200 dark:border-white/10 bg-white dark:bg-white/5 shadow-sm">
      <div className="flex items-center gap-2 mb-6">
        <Briefcase size={20} className="text-gray-900 dark:text-white" />
        <h2 className="text-xl font-bold text-gray-900 dark:text-white">About</h2>
      </div>
      <div className="space-y-4 text-gray-600 dark:text-gray-400 leading-relaxed text-md">
        <p>
          I'm an aspiring Software Engineer and a 3rd-year BSIT student at 
          <strong> Cebu Technological University</strong>. I specialize in bridging software and hardware, 
          focusing on React, Laravel, and IoT.
        </p>
        <p>
          During my academic journey, I've worked on diverse projects ranging from 
          AR-powered navigation (SpotMap) to automated procurement systems.
        </p>
      </div>
    </div>
  );
}