import React, { useState } from 'react';
import { Routes, Route, Navigate, useLocation } from 'react-router-dom';

// --- Components & Utilities ---
import Loader from './components/Loader'; 
import Navbar from './components/Navbar'; // Renamed from Sidebar
import ShapeGrid from './components/ShapeGrid'; 
import TargetCursor from './components/TargetCursor';
import Cursor from './components/Cursor';
import SFXManager from './components/SFXManager';

// --- Pages ---
import About from './pages/About';
import TechStack from './pages/TechStack';
import Projects from './pages/Projects';
import Certificates from './pages/Certificates';
import Gallery from './pages/Gallery';
import NotFound from './pages/NotFound'; 
import FooterSection from './sections/Footer-Section';

export default function App() {
  const [isLoading, setIsLoading] = useState(true);
  const location = useLocation();

  // List of valid routes
  const validRoutes = ['/', '/about', '/tech-stack', '/projects', '/certificates', '/gallery'];

  // Check if current URL is a valid route
  const isValidRoute = validRoutes.includes(location.pathname);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-zinc-950 text-gray-900 dark:text-gray-100 font-sans selection:bg-blue-500/30 relative">
      
      {/* 1. INITIAL LOADER (Only on valid routes) */}
      {isLoading && isValidRoute && (
        <Loader onComplete={() => setIsLoading(false)} />
      )}

      {/* 2. AUTOMATIC SFX CONTROLLER */}
      <SFXManager />

      {/* 3. CUSTOM CURSORS (Only rendered on valid routes) */}
      {isValidRoute && (
        <>
          <Cursor />
          <TargetCursor 
            targetSelector="button, a, .cursor-target" 
            cursorColor="#9ca3af" 
            cursorColorOnTarget="#3B82F6" 
            spinDuration={2}
            hideDefaultCursor={false}
          />
        </>
      )}

      {/* 4. BACKGROUND CANVAS (Only rendered on valid routes) */}
      {isValidRoute && (
        <div className="fixed inset-0 z-0 pointer-events-none">
          <ShapeGrid shape="square" direction="diagonal" speed={0.5} />
        </div>
      )}

      {/* 5. MAIN CONTENT WRAPPER */}
      <div className="relative z-10 w-full max-w-[1320px] mx-auto px-4 lg:px-8 xl:px-12 py-12">
        {/* Only render global header/footer layout on valid pages */}
        {isValidRoute && <Navbar />}

        <main className="w-full min-w-0 mt-8">
          <Routes>
            {/* Redirect root URL to /about */}
            <Route path="/" element={<Navigate to="/about" replace />} />
            
            <Route path="/about" element={<About />} />
            <Route path="/tech-stack" element={<TechStack />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/certificates" element={<Certificates />} />
            <Route path="/gallery" element={<Gallery />} />
            
            {/* Catch-all 404 Route */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>

        {isValidRoute && (
          <div className="mt-20">
            <FooterSection />
          </div>
        )}
      </div>
    </div>
  );
}