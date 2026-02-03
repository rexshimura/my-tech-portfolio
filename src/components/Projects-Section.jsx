export default function ProjectsSection() {
  const projects = [
    { title: "SpotMap", desc: "AR-powered indoor navigation system (Capstone Project).", tags: ["AR", "Three.js"] },
    { title: "FishTyper", desc: "A fast-paced typing game to improve accuracy.", tags: ["JavaScript", "Game Dev"] },
    { title: "CookMate", desc: "Mobile recipe management and kitchen assistant app.", tags: ["React Native", "Firebase"] }
  ];

  return (
    <section className="space-y-8">
      <h2 className="text-xs uppercase tracking-[0.2em] text-blue-600 dark:text-blue-500 font-bold">Projects</h2>
      <div className="grid gap-6">
        {projects.map((p) => (
          <div key={p.title} className="group p-6 rounded-2xl bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-white/10 hover:border-blue-500/50 transition-all">
            <h3 className="text-gray-900 dark:text-white font-semibold text-xl group-hover:text-blue-600 dark:group-hover:text-blue-400">{p.title}</h3>
            <p className="text-gray-600 dark:text-gray-400 mt-2 text-sm leading-relaxed">{p.desc}</p>
            <div className="flex gap-2 mt-4">
              {p.tags.map(tag => (
                <span key={tag} className="text-[10px] uppercase tracking-wider px-2 py-1 bg-gray-200 dark:bg-white/5 rounded text-gray-500">{tag}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}