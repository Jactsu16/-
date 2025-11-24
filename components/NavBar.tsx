
import React from 'react';
import { ViewState } from '../types';

interface NavBarProps {
  currentView: ViewState;
  setView: (view: ViewState) => void;
  isDarkMode: boolean;
  toggleDarkMode: () => void;
}

const NavBar: React.FC<NavBarProps> = ({ currentView, setView, isDarkMode, toggleDarkMode }) => {
  
  const getPageTitle = () => {
    switch (currentView) {
      case ViewState.PORTFOLIO:
        return 'Portafolio';
      case ViewState.CHATBOT:
        return 'ChatBot - Jactsu';
      case ViewState.CPANEL:
        return 'Panel de Control';
      case ViewState.HOME:
      default:
        return 'Buyer Persona';
    }
  };

  return (
    <header className="fixed top-6 left-0 right-0 z-50 px-4">
      <nav className="glass-effect border border-[#b6d0ff] dark:border-dark-border rounded-full shadow-[0px_4px_6px_rgba(0,0,0,0.1),0px_10px_15px_rgba(0,0,0,0.1)] px-4 md:px-6 py-3 max-w-[965px] h-[54px] mx-auto flex items-center justify-between transition-all duration-300">
        <h1 
          onClick={() => setView(ViewState.HOME)}
          className="text-base md:text-xl font-bold text-[#005e91] dark:text-brand-primary tracking-[-0.5px] leading-5 cursor-pointer hover:opacity-80 transition-opacity"
        >
          {getPageTitle()}
        </h1>
        
        <div className="flex items-center gap-1 md:gap-2">
          <button 
            onClick={() => setView(ViewState.HOME)}
            className={`px-3 md:px-4 h-8 md:h-9 rounded-full font-semibold text-xs md:text-sm leading-5 transition-all duration-300 ${
              currentView === ViewState.HOME 
                ? 'bg-[#0087fc] text-white hover:bg-[#005e91] hover:scale-105' 
                : 'text-[#005e91] dark:text-dark-text hover:text-[#0087fc] hover:bg-brand-bg dark:hover:bg-white/10'
            }`}
          >
            Inicio
          </button>
          
          <button 
            onClick={() => setView(ViewState.PORTFOLIO)}
            className={`px-3 md:px-4 h-8 md:h-9 rounded-full font-semibold text-xs md:text-sm leading-5 transition-all duration-300 ${
              currentView === ViewState.PORTFOLIO
                ? 'bg-[#0087fc] text-white hover:bg-[#005e91]'
                : 'text-[#005e91] dark:text-dark-text hover:text-[#0087fc] hover:bg-brand-bg dark:hover:bg-white/10'
            }`}
          >
            Portafolio
          </button>
          
          <button 
            onClick={() => setView(ViewState.CHATBOT)}
            className={`px-3 h-8 md:h-9 rounded-full font-semibold text-xs md:text-sm leading-5 transition-colors ${
              currentView === ViewState.CHATBOT 
                ? 'text-[#c12d2d] underline underline-offset-4' 
                : 'text-[#c12d2d] hover:text-red-700 dark:text-brand-accent dark:hover:text-red-400'
            }`}
          >
            ChatBot
          </button>

          <button 
            onClick={() => setView(ViewState.CPANEL)}
            className={`hidden sm:inline px-2 text-[10px] font-mono opacity-50 hover:opacity-100 ${
               currentView === ViewState.CPANEL ? 'text-brand-primary font-bold opacity-100' : 'text-[#005e91] dark:text-dark-subtext'
            }`}
            title="Panel de Control"
          >
            CP
          </button>

          {/* Dark Mode Toggle */}
          <button 
            onClick={toggleDarkMode}
            className="ml-1 p-1.5 rounded-full text-[#005e91] dark:text-white hover:bg-gray-100 dark:hover:bg-white/10 transition-colors"
          >
            {isDarkMode ? (
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" /></svg>
            ) : (
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" /></svg>
            )}
          </button>
        </div>
      </nav>
    </header>
  );
};

export default NavBar;
