
import React, { useState, useEffect } from 'react';
import NavBar from './components/NavBar';
import TopBanner from './components/TopBanner';
import ProfileView from './components/ProfileView';
import ChatInterface from './components/ChatInterface';
import PortfolioView from './components/PortfolioView';
import CPanelView from './components/CPanelView';
import Footer from './components/Footer';
import { ViewState, Project, ImageAsset } from './types';

// Initial Data from the user's image
const INITIAL_PROJECTS: Project[] = [
  {
    id: '1',
    title: 'Plan Aurora 2025',
    subtitle: 'Replanteamiento estratégico para la expansión de Visela en LATAM con enfoque data-driven y adopción progresiva de IA.',
    category: 'Estrategia',
    tags: ['may 2025', 'Real'],
    thumbnailUrl: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2426&auto=format&fit=crop',
    date: 'may 2025',
    sections: [
      { id: 's1', title: 'Introducción', type: 'TEXT', content: 'Visela busca expandir su cuota de mercado en Latinoamérica utilizando tecnologías emergentes.' },
      { 
        id: 's2', 
        title: 'Brief Estratégico', 
        type: 'BRIEF', 
        content: {
          antecedentes: 'Empresa líder en software B2B en Europa, poca presencia en LATAM.',
          historiaProducto: 'Suite de gestión creada en 2010.',
          caracteristicas: 'SaaS, Modular, AI-integrated.',
          beneficios: 'Optimización de flujos de trabajo en un 40%.',
          distribucion: 'Venta directa digital y partners locales.',
          target: 'CTOs y Gerentes de Operaciones en empresas medianas.',
          posicionamiento: 'La solución más inteligente para escalar.',
          precio: 'Suscripción Tiered (Basic, Pro, Enterprise).',
          medio: 'LinkedIn Ads, Webinars, SEO.',
          competencia: 'SAP, Oracle (en segmento alto), soluciones locales.'
        }
      }
    ]
  },
  {
    id: '2',
    title: 'Identidad Nova',
    subtitle: 'Sistema visual retrofuturista para una fintech de economía circular.',
    category: 'Diseño',
    tags: ['nov 2024', 'Ficticio'],
    thumbnailUrl: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2670&auto=format&fit=crop',
    date: 'nov 2024',
    sections: [
      { id: 's1', title: 'Concepto Visual', type: 'TEXT', content: 'Fusión de estética 80s con minimalismo moderno para denotar sostenibilidad y tecnología.' }
    ]
  },
  {
    id: '3',
    title: 'Órbita Dashboard',
    subtitle: 'Rediseño de dashboard modular con foco en experiencias micro-interactivas y accesibilidad AA.',
    category: 'Website',
    tags: ['ene 2025', 'Estudio de Caso'],
    thumbnailUrl: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2670&auto=format&fit=crop',
    date: 'ene 2025',
    sections: []
  },
  {
    id: '4',
    title: 'Pulse Activación 360°',
    subtitle: 'Activación inmersiva con realidad mixta para lanzar la línea Pulse Experience.',
    category: 'Varios',
    tags: ['sept 2023', 'Real'],
    thumbnailUrl: 'https://images.unsplash.com/photo-1626379953822-baec19c3accd?q=80&w=2670&auto=format&fit=crop',
    date: 'sept 2023',
    sections: [
       { 
        id: 'f1', 
        title: 'Flowchart del Evento', 
        type: 'FLOWCHART', 
        content: {
          objetivo: 'Lograr 500 demos en vivo durante el fin de semana de lanzamiento.',
          estrategiaMedios: 'Campaña teaser en Instagram + Influencers Tech.',
          presupuesto: '$15,000 USD',
          medidas: 'KPIs: Foot traffic, Demos completados, Social Mentions.'
        }
      }
    ]
  }
];

const App: React.FC = () => {
  const [currentView, setCurrentView] = useState<ViewState>(ViewState.HOME);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [projects, setProjects] = useState<Project[]>(INITIAL_PROJECTS);
  const [imageLibrary, setImageLibrary] = useState<ImageAsset[]>([]);

  useEffect(() => {
    const stored = localStorage.getItem('panel-image-library');
    if (stored) {
      try {
        setImageLibrary(JSON.parse(stored));
      } catch (error) {
        console.error('Error parsing stored image library', error);
      }
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('panel-image-library', JSON.stringify(imageLibrary));
  }, [imageLibrary]);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  const toggleDarkMode = () => setIsDarkMode(!isDarkMode);

  const handleAddProject = (newProject: Project) => {
    setProjects(prev => [newProject, ...prev]);
    setCurrentView(ViewState.PORTFOLIO); // Redirect to portfolio to see result
  };

  return (
    <div className="bg-white dark:bg-dark-bg min-h-screen relative font-inter transition-colors duration-300 flex flex-col">
      {/* Background decoration */}
      <div className="fixed top-0 left-0 w-full h-[600px] bg-gradient-to-b from-blue-50 to-white dark:from-black dark:to-dark-bg -z-10 pointer-events-none opacity-60" />

      <TopBanner />
      <NavBar
        currentView={currentView}
        setView={setCurrentView}
        isDarkMode={isDarkMode}
        toggleDarkMode={toggleDarkMode}
      />

      <div className="flex-grow transition-opacity duration-300 ease-in-out">
        {currentView === ViewState.HOME && <ProfileView />}
        {currentView === ViewState.CHATBOT && <ChatInterface />}
        {currentView === ViewState.PORTFOLIO && (
          <PortfolioView projects={projects} imageLibrary={imageLibrary} />
        )}
        {currentView === ViewState.CPANEL && (
          <CPanelView
            onAddProject={handleAddProject}
            imageLibrary={imageLibrary}
            onUpdateImageLibrary={setImageLibrary}
          />
        )}
      </div>

      <Footer />
    </div>
  );
};

export default App;
