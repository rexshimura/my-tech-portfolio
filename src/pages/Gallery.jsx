import React from 'react';
import GallerySection from '../sections/Gallery-Section';

export default function Gallery() {
  return (
    <div className="p-8 rounded-3xl border border-gray-200 dark:border-white/10 bg-white/40 dark:bg-zinc-950/20 backdrop-blur-md shadow-sm animate-in fade-in slide-in-from-bottom-4 duration-500">
      <GallerySection />
    </div>
  );
}