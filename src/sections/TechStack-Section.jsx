import React from 'react';
import { Code2 } from 'lucide-react';
import * as SimpleIcons from 'react-icons/si';
import { FaCode } from 'react-icons/fa';
import LogoLoop from '../components/LogoLoop';

export default function TechStackSection() {

  const getIcon = (iconName) => {
    const Icon = SimpleIcons[iconName];

    if (Icon) {
      return <Icon />;
    }

    return <FaCode />;
  };

  const categories = [
    {
      title: 'Frameworks, Markup, Styles & Tools',
      skills: [
        'React',
        'React Native',
        'Expo',
        'Inertia.js',
        'Next.js',
        'Vue',
        'Vite',
        'Laravel',
        'Tailwind CSS',
        'Bootstrap',
        'Xendit',
        'HTML5',
        'CSS3',
        'HTML',
        'CSS'
      ]
    },
    {
      title: 'Languages',
      skills: [
        'JavaScript',
        'TypeScript',
        'PHP',
        'Java',
        'Python',
        'C',
        'C++',
        'C#',
        'SQL',
        'Bash',
        'Shell Scripting'
      ]
    },
    {
      title: 'Backend, Cloud & AI',
      skills: [
        'Node.js',
        'Google Firebase',
        'AWS',
        'Vercel',
        'Flask',
        'Django',
        'Groq AI',
        'Gemini AI',
        'OpenAI API',
        'Supabase'
      ]
    },
    {
      title: 'IoT & Networking',
      skills: [
        'Arduino UNO',
        'Raspberry Pi',
        'ESP32',
        'Sensors',
        'Cisco Packet Tracer',
        'VLSM',
        'IP Subnetting'
      ]
    },
    {
      title: 'Databases & GUI',
      skills: [
        'MySQL',
        'PostgreSQL',
        'MongoDB',
        'Firestore',
        'QT Designer',
        'Figma'
      ]
    },
    {
      title: 'Tools & Productivity',
      skills: [
        'Git',
        'GitHub',
        'VS Code',
        'Notion',
        'Trello',
        'JetBrains',
        'Arduino IDE',
        'ClickUp',
        'Photoshop',
        'Canva'
      ]
    }
  ];

  const iconMap = {
    'React': 'SiReact',
    'React Native': 'SiReact',
    'Expo': 'SiExpo',
    'Inertia.js': 'SiInertia',
    'Next.js': 'SiNextdotjs',
    'Vue': 'SiVuedotjs',
    'Vite': 'SiVite',
    'Laravel': 'SiLaravel',
    'Tailwind CSS': 'SiTailwindcss',
    'Bootstrap': 'SiBootstrap',
    'Xendit': 'SiXendit',
    'HTML5': 'SiHtml5',
    'CSS3': 'SiCss3',
    'HTML': 'SiHtml5',
    'CSS': 'SiCss3',

    'JavaScript': 'SiJavascript',
    'TypeScript': 'SiTypescript',
    'PHP': 'SiPhp',
    'Java': 'SiOpenjdk',
    'Python': 'SiPython',
    'C': 'SiC',
    'C++': 'SiCplusplus',
    'C#': 'SiCsharp',
    'SQL': 'SiMysql',
    'Bash': 'SiGnubash',
    'Shell Scripting': 'SiGnubash',

    'Node.js': 'SiNodedotjs',
    'Google Firebase': 'SiFirebase',
    'AWS': 'SiAmazonaws',
    'Vercel': 'SiVercel',
    'Flask': 'SiFlask',
    'Django': 'SiDjango',
    'Groq AI': 'SiGroq',
    'Gemini AI': 'SiGooglegemini',
    'OpenAI API': 'SiOpenai',
    'Supabase': 'SiSupabase',

    'Arduino UNO': 'SiArduino',
    'Raspberry Pi': 'SiRaspberrypi',
    'ESP32': 'SiEspressif',
    'Sensors': 'SiSensirion',
    'Cisco Packet Tracer': 'SiCisco',
    'VLSM': 'SiCisco',
    'IP Subnetting': 'SiCisco',

    'MySQL': 'SiMysql',
    'PostgreSQL': 'SiPostgresql',
    'MongoDB': 'SiMongodb',
    'Firestore': 'SiFirebase',
    'QT Designer': 'SiQt',
    'Figma': 'SiFigma',

    'Git': 'SiGit',
    'GitHub': 'SiGithub',
    'VS Code': 'SiVisualstudiocode',
    'Notion': 'SiNotion',
    'Trello': 'SiTrello',
    'JetBrains': 'SiJetbrains',
    'Arduino IDE': 'SiArduino',
    'ClickUp': 'SiClickup',
    'Photoshop': 'SiAdobephotoshop',
    'Canva': 'SiCanva'
  };

  const techLogos = categories.flatMap((category) =>
    category.skills.map((skill) => ({
      node: getIcon(iconMap[skill]),
      title: skill
    }))
  );

  const middleIndex = Math.ceil(techLogos.length / 2);

  const firstRow = techLogos.slice(0, middleIndex);
  const secondRow = techLogos.slice(middleIndex);

  const renderTechItem = (item) => (
    <div className="sfx-bop flex items-center gap-3 px-4 py-3 rounded-2xl border border-gray-200 dark:border-white/10 bg-gray-50/80 dark:bg-white/[0.03] text-gray-700 dark:text-gray-300 transition-all duration-300 hover:border-blue-500/30 hover:bg-blue-500/5 dark:hover:bg-blue-500/10 hover:text-blue-500 dark:hover:text-blue-400">

      <span className="text-2xl flex items-center shrink-0">
        {item.node}
      </span>

      <span className="text-xs font-bold whitespace-nowrap">
        {item.title}
      </span>

    </div>
  );

  return (
    <div className="p-8 rounded-3xl border border-gray-200 dark:border-white/10 bg-white/40 dark:bg-zinc-950/20 backdrop-blur-md shadow-sm transition-all duration-300">

      {/* Header */}
      <div className="flex items-center gap-3 mb-10">

        <img
          src="/3d/008.png"
          alt="Tech Stack"
          className="w-9 h-9 object-contain"
        />

        <h2 className="text-xl font-bold text-gray-900 dark:text-white tracking-tight">
          Tech Stack
        </h2>

      </div>

      {/* TOP ANIMATED LOGO ROW */}
      <div className="relative w-full overflow-hidden">

        <LogoLoop
          logos={firstRow}
          speed={70}
          direction="left"
          logoHeight={32}
          gap={36}
          hoverSpeed={0}
          scaleOnHover
          fadeOut
          ariaLabel="Technology stack first row"
          renderItem={renderTechItem}
        />

      </div>

      {/* CATEGORIZED TECH STACK */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8 mt-12 mb-12">

        {categories.map((category) => (

          <div
            key={category.title}
            className="space-y-4"
          >

            <h3 className="text-[11px] font-black text-gray-900 dark:text-white/80 uppercase tracking-[0.2em]">
              {category.title}
            </h3>

            <div className="flex flex-wrap gap-2">

              {category.skills.map((skill) => (

                <span
                  key={skill}
                  className="sfx-mini px-3 py-1 rounded-lg border border-gray-200 dark:border-white/10 bg-gray-50 dark:bg-white/5 text-xs font-medium text-gray-600 dark:text-gray-400 hover:bg-blue-500/5 dark:hover:bg-blue-500/10 hover:text-blue-600 dark:hover:text-blue-400 hover:border-blue-500/20 dark:hover:border-blue-500/30 transition-all duration-200 cursor-default"
                >
                  {skill}
                </span>

              ))}

            </div>

          </div>

        ))}

      </div>

      {/* BOTTOM ANIMATED LOGO ROW */}
      <div className="relative w-full overflow-hidden">

        <LogoLoop
          logos={secondRow}
          speed={55}
          direction="right"
          logoHeight={32}
          gap={36}
          hoverSpeed={0}
          scaleOnHover
          fadeOut
          ariaLabel="Technology stack second row"
          renderItem={renderTechItem}
        />

      </div>

      {/* Footer Hint */}
      <div className="mt-8 flex items-center gap-2 text-[10px] text-gray-400 dark:text-gray-500 font-medium">

        <Code2 size={13} />

        <span>
          Technologies I use to build, experiment, and create.
        </span>

      </div>

    </div>
  );
}