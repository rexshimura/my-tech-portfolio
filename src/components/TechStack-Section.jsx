export default function TechStackSection() {
  const categories = [
    { title: "Frontend", skills: ["JavaScript", "React", "Next.js", "Tailwind CSS"] },
    { title: "Backend", skills: ["Python", "PHP", "Laravel", "Firebase"] },
    { title: "IoT & Networking", skills: ["Arduino", "Cisco Packet Tracer", "VLSM"] }
  ];

  return (
    <div className="p-8 rounded-3xl border border-gray-200 dark:border-white/10 bg-white dark:bg-white/5 shadow-sm">
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-xl font-bold text-gray-900 dark:text-white">Tech Stack</h2>
        <button className="text-sm font-medium text-gray-500 hover:text-blue-500">View All &gt;</button>
      </div>
      
      <div className="space-y-6">
        {categories.map((cat) => (
          <div key={cat.title}>
            <h3 className="text-sm font-bold text-gray-900 dark:text-white mb-3 uppercase tracking-wider">{cat.title}</h3>
            <div className="flex flex-wrap gap-2">
              {cat.skills.map(skill => (
                <span key={skill} className="px-3 py-1.5 rounded-full border border-gray-200 dark:border-white/10 bg-gray-50 dark:bg-white/5 text-sm text-gray-600 dark:text-gray-300">
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