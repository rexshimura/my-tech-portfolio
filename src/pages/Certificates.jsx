import React from 'react';
import CertificatesSection from '../sections/Certificates-Section';

export default function Certificates() {
  return (
    <div className="p-8 rounded-3xl border border-gray-200 dark:border-white/10 bg-white/40 dark:bg-zinc-950/20 backdrop-blur-md shadow-sm animate-in fade-in slide-in-from-bottom-4 duration-500">
      <CertificatesSection />
    </div>
  );
}