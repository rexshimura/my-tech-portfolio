import React, { useState, useEffect } from 'react';
import {
  Routes,
  Route,
  Navigate,
  useLocation
} from 'react-router-dom';

// --- Components & Utilities ---
import Loader from './components/Loader';
import Navbar from './components/Navbar';
import ShapeGrid from './components/ShapeGrid';
import Aurora from './components/Aurora';
import TargetCursor from './components/TargetCursor';
import Cursor from './components/Cursor';
import SFXManager from './components/SFXManager';
import Curious from './components/Curious';
import LineSidebar from './components/LineSidebar';
import ScrollToTop from './components/ScrollToTop';

// --- Pages ---
import About from './pages/About';
import TechStack from './pages/TechStack';
import Projects from './pages/Projects';
import Certificates from './pages/Certificates';
import Gallery from './pages/Gallery';
import NotFound from './pages/NotFound';

// --- Sections ---
import FooterSection from './sections/Footer-Section';

const PROJECT_CATEGORIES = [
  'Websites',
  'Integrated AI',
  'Desktop',
  'Mobile',
  'Extensions',
  'IoT',
  'Games'
];

export default function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [showCurious, setShowCurious] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState(PROJECT_CATEGORIES[0]);

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
    setTheme((previousTheme) => (previousTheme === 'dark' ? 'light' : 'dark'));
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
  const isTechStackPage = location.pathname === '/tech-stack';

  const scrollToSection = (index) => {
    const sectionIds = ['tech-stack', 'hardware-tools'];
    const targetId = sectionIds[index];
    const target = document.getElementById(targetId);

    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-zinc-950 text-gray-900 dark:text-gray-100 font-sans selection:bg-blue-500/30 relative transition-colors duration-500">
      
      {/* INITIAL LOADER */}
      {isLoading && isValidRoute && (
        <Loader onComplete={() => setIsLoading(false)} />
      )}

      {/* AUTOMATIC SFX CONTROLLER */}
      <SFXManager />

      {/* FLOATING SCROLL TO TOP BUTTON */}
      {isValidRoute && <ScrollToTop />}

      {/* CUSTOM CURSORS */}
      {isValidRoute && (
        <>
          <Cursor theme={theme} />
          <TargetCursor
            targetSelector="button, a, .cursor-target"
            cursorColor="#9ca3af"
            cursorColorOnTarget="#3B82F6"
            spinDuration={2}
            hideDefaultCursor={false}
          />
        </>
      )}

      {/* TECH STACK LINE SIDEBAR */}
      {isTechStackPage && (
        <div className="fixed left-6 top-1/2 -translate-y-1/2 z-50 hidden xl:block">
          <LineSidebar
            items={['Tech Stack', 'Hardware Tools']}
            accentColor="#3B82F6"
            textColor="#9ca3af"
            markerColor="#6c6c6c"
            showIndex
            showMarker
            proximityRadius={100}
            maxShift={30}
            falloff="smooth"
            markerLength={60}
            markerGap={0}
            tickScale={0.5}
            scaleTick
            itemGap={28}
            fontSize={0.85}
            smoothing={100}
            defaultActive={0}
            onItemClick={(index) => scrollToSection(index)}
          />
        </div>
      )}

      {/* DYNAMIC BACKGROUND */}
      {isValidRoute && (
        <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden opacity-40 dark:opacity-60 transition-opacity duration-700">
          {theme === 'dark' ? (
            <Aurora
              colorStops={['#0284c7', '#3b82f6', '#6366f1']}
              amplitude={1.2}
              blend={0.6}
              speed={0.8}
            />
          ) : (
            <ShapeGrid shape="square" direction="diagonal" speed={0.5} />
          )}
        </div>
      )}

      {/* MAIN CONTENT */}
      <div className="relative z-10 w-full max-w-[1320px] mx-auto px-4 lg:px-8 xl:px-12 py-6">
        
        {/* NAVBAR */}
        {isValidRoute && <Navbar theme={theme} toggleTheme={toggleTheme} />}

        {/* PAGE CONTENT */}
        <main className="w-full min-w-0 mt-8">
          <Routes>
            <Route path="/" element={<Navigate to="/about" replace />} />
            <Route
              path="/about"
              element={<About onOpenCurious={() => setShowCurious(true)} />}
            />
            <Route path="/tech-stack" element={<TechStack />} />
            <Route
              path="/projects"
              element={
                <Projects
                  selectedCategory={selectedCategory}
                  onCategoryChange={setSelectedCategory}
                  categories={PROJECT_CATEGORIES}
                />
              }
            />
            <Route path="/certificates" element={<Certificates />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>

        {/* FOOTER */}
        {isValidRoute && (
          <div className="mt-20">
            <FooterSection />
          </div>
        )}

      </div>

      {/* CURIOUS PROFILE POPUP */}
      <Curious isOpen={showCurious} onClose={() => setShowCurious(false)} />

    </div>
  );
}