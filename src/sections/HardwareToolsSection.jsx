import React from 'react';

export default function HardwareToolsSection() {
  const hardwareTools = [
    {
      name: 'ASUS TUF Gaming A15',
      type: 'Laptop',
      image: '/images/hardware/h1.png',
      link: 'https://www.asus.com/bn/laptops/for-gaming/tuf-gaming/asus-tuf-gaming-a15-2022/',
      tags: ['Ryzen 7', '144Hz', 'Gaming Laptop']
    },
    {
      name: 'Razer Deathstalker Chroma',
      type: 'Keyboard',
      image: '/images/hardware/h2.png',
      link: 'https://mysupport.razer.com/app/answers/detail/a_id/3607/~/razer-deathstalker-chroma-%7C-rz03-01500-support-%26-faqs',
      tags: ['Membrane', 'Razer', 'Arm Rest']
    }
  ];

  return (
    <section className="p-8 rounded-3xl border border-gray-200 dark:border-white/10 bg-white/40 dark:bg-zinc-950/20 backdrop-blur-md shadow-sm transition-all duration-300">

      {/* Header */}
      <div className="flex items-center gap-3 mb-8">
        <div className="relative shrink-0 w-9 h-9 flex items-center justify-center">
          <img
            src="/3d/009.png"
            alt="Hardware Tools"
            className="w-11 h-11 object-contain"
            onError={(e) => {
              e.target.style.display = 'none';
            }}
          />
        </div>

        <div>
          <h2 className="text-xl font-bold text-gray-900 dark:text-white tracking-tight">
            Hardware Tools
          </h2>

          <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
            The hardware I use to build, develop, and create.
          </p>
        </div>
      </div>

      {/* Hardware Cards - Maximum 2 Columns */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

        {hardwareTools.map((hardware) => (
          <a
            key={hardware.name}
            href={hardware.link}
            target="_blank"
            rel="noopener noreferrer"
            className="group block rounded-3xl border border-gray-200 dark:border-white/10 bg-gray-50/70 dark:bg-white/[0.03] overflow-hidden hover:border-blue-500/30 hover:bg-blue-500/[0.03] dark:hover:bg-blue-500/[0.06] transition-all duration-300"
          >

            {/* Larger Image */}
            <div className="relative w-full h-72 sm:h-80 flex items-center justify-center overflow-hidden bg-gray-100/50 dark:bg-black/20">

              <img
                src={hardware.image}
                alt={hardware.name}
                className="w-[90%] h-[90%] object-contain drop-shadow-[0_18px_25px_rgba(0,0,0,0.15)] group-hover:scale-105 group-hover:-translate-y-1 transition-transform duration-500"
                onError={(e) => {
                  e.target.style.display = 'none';
                }}
              />

            </div>

            {/* Card Content */}
            <div className="p-5">

              <div className="flex items-start justify-between gap-4">

                <div>
                  <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-gray-400 dark:text-gray-500 mb-1">
                    {hardware.type}
                  </p>

                  <h3 className="text-sm font-bold text-gray-900 dark:text-white group-hover:text-blue-500 dark:group-hover:text-blue-400 transition-colors">
                    {hardware.name}
                  </h3>
                </div>

                <span className="text-gray-400 dark:text-gray-500 group-hover:text-blue-500 transition-colors">
                  ↗
                </span>

              </div>

              {/* Gray Specification Tags */}
              <div className="flex flex-wrap gap-2 mt-4">

                {hardware.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 rounded-full bg-gray-200/70 dark:bg-white/10 border border-gray-300/70 dark:border-white/10 text-[10px] font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wider"
                  >
                    {tag}
                  </span>
                ))}

              </div>

            </div>

          </a>
        ))}

      </div>

    </section>
  );
}