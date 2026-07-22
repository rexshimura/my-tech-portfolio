import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

export default function NotFound() {
  const navigate = useNavigate();

  return (
    <div className="fixed inset-0 z-[999] bg-white flex flex-col items-center justify-center p-6 text-center">
      
      {/* Smaller Centered GIF Container */}
      <div className="w-full max-w-[220px] mb-6">
        <img 
          src="/gif/notfound.gif" 
          alt="Page Not Found" 
          className="w-full h-auto object-contain mx-auto"
        />
      </div>

      {/* Return to Previous Page Button */}
      <button
        onClick={() => navigate(-1)}
        className="cursor-target inline-flex items-center gap-2 px-5 py-2.5 bg-zinc-900 hover:bg-zinc-800 text-white text-xs font-bold uppercase tracking-wider rounded-xl shadow-md transition-all hover:-translate-y-0.5"
      >
        <ArrowLeft size={16} />
        Go Back
      </button>

    </div>
  );
}