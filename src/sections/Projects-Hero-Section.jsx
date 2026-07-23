import React from 'react';
import CurvedLoop from '../components/CurvedLoop';

export default function ProjectsHeroSection() {
  return (
    <div className="relative w-full flex flex-col items-center text-center overflow-hidden">
      {/* CURVED LOOP MARQUEE BANNER */}
      <div className="w-full -mb-5">
        <CurvedLoop
          marqueeText="IDEA ✦ ANALYZE ✦ BUILD ✦ DEPLOY ✦ TEST ✦ PROTOTYPE ✦ INNOVATE ✦ REPEAT ✦ CODE ✦ DESIGN ✦ DEVELOP ✦ EXECUTE ✦ REFINE ✦ SCALE ✦ RELEASE ✦ MAINTAIN ✦ IMPROVE ✦ ADAPT ✦ EVOLVE ✦ LEARN ✦ TEACH ✦ COLLABORATE ✦ CREATE ✦ INSPIRE ✦ DREAM ✦ ACHIEVE ✦"
          speed={1.5}
          curveAmount={130}
          direction="left"
          interactive={true}
          className="font-black tracking-tight fill-gray-900 dark:fill-white opacity-90"
        />
      </div>

    </div>
  );
}