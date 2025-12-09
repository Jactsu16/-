
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="w-full mt-auto border-t border-[#b6d0ff] dark:border-dark-border bg-white/80 dark:bg-black/80 backdrop-blur-md transition-colors duration-300">
      <div className="max-w-[1080px] mx-auto px-4 md:px-6 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 text-center md:text-left">
          
          {/* Credits */}
          <div className="space-y-2">
            <h3 className="font-bold text-[#005e91] dark:text-brand-primary text-lg">Jamileth Guerra</h3>
            <div className="text-sm text-slate-600 dark:text-dark-subtext">
              <p>Creado por Jamileth Guerra</p>
              <p>Diseñado por Jamileth Guerra</p>
              <p className="text-xs text-slate-500 dark:text-slate-500 mt-1">Panamá, Panamá</p>
            </div>
          </div>

          {/* Links & Contact */}
          <div className="flex flex-col items-center md:items-end gap-3 text-sm text-slate-600 dark:text-dark-subtext">
            
            <a 
              href="https://jactsu16.github.io/ExpressCreativa" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group flex items-center gap-2 px-4 py-2 bg-[#f2f6ff] dark:bg-white/5 rounded-full hover:bg-[#0087fc] hover:text-white dark:hover:bg-brand-primary transition-all duration-300"
            >
              <span>🌐</span>
              <span className="font-medium">Página Profesional (ExpressCreativa)</span>
              <svg className="w-3 h-3 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
            </a>

            <div className="flex flex-col md:flex-row gap-2 md:gap-6 items-center mt-1">
              <div className="flex items-center gap-2">
                <span className="text-[#0076c7] dark:text-brand-secondary">📱</span>
                <span className="font-mono">6530-0791 / 6604-3511</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-[#0076c7] dark:text-brand-secondary">✉️</span>
                <a href="mailto:jamileth.guerraa@gmail.com" className="hover:text-[#0087fc] dark:hover:text-white transition-colors">
                  jamileth.guerraa@gmail.com
                </a>
              </div>
            </div>

          </div>
        </div>
        
        {/* Copyright */}
        <div className="mt-8 pt-6 border-t border-slate-200 dark:border-white/10 text-center">
          <p className="text-[10px] text-slate-400 uppercase tracking-widest">
            © {new Date().getFullYear()} Jactsu System • AI Buyer Persona
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
