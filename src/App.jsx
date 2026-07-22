import React, { useState, useEffect } from 'react';
import { Routes, Route, Navigate, useLocation } from 'react-router-dom';

// --- Components & Utilities ---
import Loader from './components/Loader';
import Navbar from './components/Navbar';
import ShapeGrid from './components/ShapeGrid';
import Aurora from './components/Aurora';
import TargetCursor from './components/TargetCursor';
import Cursor from './components/Cursor';
import SFXManager from './components/SFXManager';
import Curious from './components/Curious';

// --- Pages ---
import About from './pages/About';
import TechStack from './pages/TechStack';
import Projects from './pages/Projects';
import Certificates from './pages/Certificates';
import Gallery from './pages/Gallery';
import NotFound from './pages/NotFound';

// --- Sections ---
import FooterSection from './sections/Footer-Section';

export default function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [showCurious, setShowCurious] = useState(false);

  const location = useLocation();

  // --- Theme State ---
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem('theme') || 'light';
  });

  useEffect(() => {
    const root = document.documentElement;

    if (theme === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }

    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (
      prev === 'dark' ? 'light' : 'dark'
    ));
  };

  const validRoutes = [
    '/',
    '/about',
    '/tech-stack',
    '/projects',
    '/certificates',
    '/gallery'
  ];

  const isValidRoute = validRoutes.includes(location.pathname);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-zinc-950 text-gray-900 dark:text-gray-100 font-sans selection:bg-blue-500/30 relative transition-colors duration-500">

      {/* 1. INITIAL LOADER */}
      {isLoading && isValidRoute && (
        <Loader
          onComplete={() => setIsLoading(false)}
        />
      )}

      {/* 2. AUTOMATIC SFX CONTROLLER */}
      <SFXManager />

      {/* 3. CUSTOM CURSORS */}
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

      {/* 4. DYNAMIC BACKGROUND CANVAS */}
      {isValidRoute && (
        <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden opacity-40 dark:opacity-60 transition-opacity duration-700">

          {theme === 'dark' ? (
            <Aurora
              colorStops={[
                '#0284c7',
                '#3b82f6',
                '#6366f1'
              ]}
              amplitude={1.2}
              blend={0.6}
              speed={0.8}
            />
          ) : (
            <ShapeGrid
              shape="square"
              direction="diagonal"
              speed={0.5}
            />
          )}

        </div>
      )}

      {/* 5. MAIN CONTENT WRAPPER */}
      <div className="relative z-10 w-full max-w-[1320px] mx-auto px-4 lg:px-8 xl:px-12 py-6">

        {/* STICKY NAVBAR */}
        {isValidRoute && (
          <Navbar
            theme={theme}
            toggleTheme={toggleTheme}
          />
        )}

        {/* PAGE CONTENT */}
        <main className="w-full min-w-0 mt-8">

          <Routes>

            <Route
              path="/"
              element={
                <Navigate
                  to="/about"
                  replace
                />
              }
            />

            <Route
              path="/about"
              element={
                <About
                  onOpenCurious={() => setShowCurious(true)}
                />
              }
            />

            <Route
              path="/tech-stack"
              element={<TechStack />}
            />

            <Route
              path="/projects"
              element={<Projects />}
            />

            <Route
              path="/certificates"
              element={<Certificates />}
            />

            <Route
              path="/gallery"
              element={<Gallery />}
            />

            <Route
              path="*"
              element={<NotFound />}
            />

          </Routes>

        </main>

        {/* FOOTER */}
        {isValidRoute && (
          <div className="mt-20">
            <FooterSection />
          </div>
        )}

      </div>

      {/* 6. GLOBAL CURIOUS PROFILE POPUP */}
      <Curious
        isOpen={showCurious}
        onClose={() => setShowCurious(false)}
      />

    </div>
  );
}