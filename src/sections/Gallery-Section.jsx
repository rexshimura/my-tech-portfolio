import { Camera } from 'lucide-react';

export default function GallerySection() {
  return (
    <section className="space-y-6">
      <div className="flex items-center gap-2">
        <h2 className="text-xs uppercase tracking-[0.2em] text-blue-600 dark:text-blue-500 font-bold">Gallery</h2>
        <Camera size={14} className="text-gray-400" />
      </div>
      <p className="text-xs text-gray-500 italic">Samsung Digimax A50 / Canon Powershot A480</p>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {[1, 2, 3].map((i) => (
          <div key={i} className="aspect-square bg-gray-50 dark:bg-white/5 rounded-lg border border-gray-200 dark:border-white/10 overflow-hidden">
            <div className="w-full h-full flex items-center justify-center text-gray-400 dark:text-gray-700 italic text-xs">Vintage Shot {i}</div>
          </div>
        ))}
      </div>
    </section>
  );
}