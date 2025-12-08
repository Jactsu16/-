import React from 'react';

const TopBanner: React.FC = () => {
  return (
    <div className="fixed top-2 left-0 right-0 z-40 flex justify-center px-4">
      <a
        href="/curriculum.html"
        className="group w-full max-w-[820px] rounded-full bg-gradient-to-r from-[#00446a] via-[#0087fc] to-[#00b7c2] text-white shadow-lg shadow-[#0087fc]/20 border border-white/30 hover:-translate-y-[1px] transition-all duration-300"
        aria-label="Conoce más sobre Finlandia - Currículum interactivo"
      >
        <div className="flex items-center justify-between px-4 py-2 text-sm md:text-base font-semibold tracking-tight">
          <span className="uppercase text-white/80 text-[11px] md:text-xs">Banner</span>
          <p className="flex-1 text-center">
            Tócame, tócame — conoce más sobre Finlandia. Currículum vital, interactivo.
          </p>
          <span className="text-white/90 text-xs md:text-sm group-hover:translate-x-0.5 transition-transform">→</span>
        </div>
      </a>
    </div>
  );
};

export default TopBanner;
