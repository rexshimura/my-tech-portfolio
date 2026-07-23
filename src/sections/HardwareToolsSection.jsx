import React from 'react';

export default function HardwareToolsSection() {
  const hardwareTools = [
    {
      name: 'ASUS TUF Gaming A15',
      type: 'Laptop',
      image: '/images/hardware/h1.png',
      link: 'https://www.asus.com/bn/laptops/for-gaming/tuf-gaming/asus-tuf-gaming-a15-2022/',
      tags: ['Ryzen 7', '144Hz', 'Gaming Laptop'],
      imageClass: 'w-[90%] h-[90%]'
    },
    {
      name: 'Hailan All-in-One PC',
      type: 'Desktop PC',
      image: '/images/hardware/h6.png', // Kept h6.png
      link: 'https://www.lazada.com.ph/products/tgpc-all-in-one-pc-hailan-22-monitor-ips-i5-7th-gen-8-gb-ram-256-gb-ssd-preloved-i4647991013.html',
      tags: ['All-in-One', '22" Display', 'Core i5'],
      imageClass: 'w-[90%] h-[90%]'
    },
    {
      name: 'Lenovo IdeaPad 330',
      type: 'Laptop',
      image: '/images/hardware/h3.png',
      link: 'https://www.complink.com.ph/products/lenovo-ideapad-330-17ich-81fl004vph',
      tags: ['Core i7', 'GTX 1050', '17.3" Display'],
      imageClass: 'w-[115%] h-[115%] max-w-none scale-110 translate-x-2'
    },
    {
      name: 'OPPO Pad SE',
      type: 'Tablet',
      image: '/images/hardware/h4.png',
      link: 'https://www.vteccomputer.com/en/product/45590-72023/oppo-pad-se-lte-11-4128gb',
      tags: ['Helio G100', 'Slim', 'ColorOS'],
      imageClass: 'w-[90%] h-[90%] scale-95'
    },
    {
      name: 'Razer Deathstalker Chroma',
      type: 'Keyboard',
      image: '/images/hardware/h2.png',
      link: 'https://mysupport.razer.com/app/answers/detail/a_id/3607/~/razer-deathstalker-chroma-%7C-rz03-01500-support-%26-faqs',
      tags: ['Membrane', 'Razer', 'Arm Rest'],
      imageClass: 'w-[80%] h-[80%] scale-90'
    },
    {
      name: 'VIVO Y35',
      type: 'Smartphone',
      image: '/images/hardware/h5.png', // Kept h5.png
      link: 'https://www.abenson.com/vivo-y35-dawn-gold.html',
      tags: ['50MP Cam', 'Gold', 'Snapdragon'],
      imageClass: 'w-[85%] h-[85%] scale-95'
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

      {/* Hardware Cards - 3 Columns Layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">

        {hardwareTools.map((hardware) => (
          <a
            key={hardware.name}
            href={hardware.link}
            target="_blank"
            rel="noopener noreferrer"
            className="group block rounded-3xl border border-gray-200 dark:border-white/10 bg-gray-50/70 dark:bg-white/[0.03] overflow-hidden hover:border-blue-500/30 hover:bg-blue-500/[0.03] dark:hover:bg-blue-500/[0.06] transition-all duration-300"
          >

            {/* Image Container with smooth Hover Zoom wrapper */}
            <div className="relative w-full h-64 sm:h-72 flex items-center justify-center overflow-hidden bg-gray-100/50 dark:bg-black/20">
              
              {/* Zoom Wrapper */}
              <div className="w-full h-full flex items-center justify-center transition-transform duration-500 ease-out group-hover:scale-105 group-hover:-translate-y-1">
                <img
                  src={hardware.image}
                  alt={hardware.name}
                  className={`object-contain drop-shadow-[0_18px_25px_rgba(0,0,0,0.15)] ${
                    hardware.imageClass || 'w-[90%] h-[90%]'
                  }`}
                  onError={(e) => {
                    e.target.style.display = 'none';
                  }}
                />
              </div>

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