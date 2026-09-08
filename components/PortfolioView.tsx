
import React, { useState } from 'react';
import { ImageAsset, Project } from '../types';

interface PortfolioViewProps {
  projects: Project[];
  imageLibrary: ImageAsset[];
}

type PortfolioFilter = 'Todos' | 'Mercadeo' | 'Audiovisual' | 'Diseño' | 'E-commerce';

interface CaseStudy {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  category: Exclude<PortfolioFilter, 'Todos'>;
  filters: PortfolioFilter[];
  description: string;
  thumbnailUrl: string;
  secondaryImage?: string;
  note: string;
}

const FILTERS: PortfolioFilter[] = ['Todos', 'Mercadeo', 'Audiovisual', 'Diseño', 'E-commerce'];

const CASES: CaseStudy[] = [
  {
    id: 'tvn',
    number: '01',
    title: 'TVN',
    subtitle: 'Práctica profesional · Mercadeo y activaciones',
    category: 'Audiovisual',
    filters: ['Mercadeo', 'Audiovisual'],
    description: 'Producción audiovisual, cobertura de eventos y apoyo en activaciones de marca. Una experiencia que me permitió llevar las ideas del papel a la realidad, trabajando en equipo en un entorno real de medios.',
    thumbnailUrl: 'https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?auto=format&fit=crop&w=1600&q=88',
    secondaryImage: 'https://images.unsplash.com/photo-1590602847861-f357a9332bbc?auto=format&fit=crop&w=900&q=88',
    note: 'Ideas que conectan personas',
  },
  {
    id: 'hallyu',
    number: '02',
    title: 'HALLYU.KSTORE',
    subtitle: 'Contenido y e-commerce',
    category: 'E-commerce',
    filters: ['Mercadeo', 'E-commerce'],
    description: 'Creación de contenido, gestión de tienda online y estrategia digital para una marca de productos K-pop. Un proyecto que une creatividad, fandom y estrategia para conectar con una comunidad real.',
    thumbnailUrl: 'https://images.unsplash.com/photo-1606761568499-6d2451b23c66?auto=format&fit=crop&w=1600&q=88',
    note: 'Cultura, ideas y comunidad',
  },
  {
    id: 'express',
    number: '03',
    title: 'EXPRESSCREATIVA',
    subtitle: 'Branding y dirección creativa',
    category: 'Diseño',
    filters: ['Mercadeo', 'Diseño'],
    description: 'Desarrollo de identidad visual, piezas publicitarias y dirección creativa para proyectos de marca. Convertir ideas en sistemas visuales que comunican, inspiran y generan impacto.',
    thumbnailUrl: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&w=1600&q=88',
    note: 'Estrategia, diseño e ideas reales',
  },
];

const Arrow: React.FC = () => <span aria-hidden="true" className="text-2xl leading-none">→</span>;

const PortfolioView: React.FC<PortfolioViewProps> = () => {
  const [activeFilter, setActiveFilter] = useState<PortfolioFilter>('Todos');
  const [selectedCase, setSelectedCase] = useState<CaseStudy | null>(null);

  const visibleCases = CASES.filter(item => activeFilter === 'Todos' || item.filters.includes(activeFilter));

  return (
    <div className="relative pt-24 md:pt-[110px] pb-12 px-4 md:px-6 max-w-[1200px] mx-auto min-h-screen">
      <div className="hidden 2xl:block pointer-events-none absolute -left-28 top-64 text-[96px] leading-none font-black tracking-[0.08em] text-blue-100/80 dark:text-white/5 [writing-mode:vertical-rl] rotate-180">
        PORTAFOLIO
      </div>

      <header className="text-center pt-4 md:pt-8">
        <div className="inline-flex rounded-full border border-[#b6d0ff] dark:border-brand-primary/50 px-6 py-2">
          <span className="text-[11px] font-black tracking-[0.24em] text-[#005e91] dark:text-brand-primary uppercase">Jamileth J. Guerra</span>
        </div>
        <h1 className="mx-auto mt-5 max-w-5xl text-4xl md:text-6xl lg:text-[68px] font-black leading-[0.98] tracking-[-0.055em] text-[#005e91] dark:text-white">
          Todas las ideas = <span className="text-[#0087fc]">Pensar, Crear &amp;<br className="hidden md:block" /> Transformar</span>
        </h1>
        <p className="mt-6 text-base md:text-lg text-slate-600 dark:text-dark-subtext">
          Publicidad, producción audiovisual, estrategia y experiencias de marca.
        </p>
      </header>

      <div className="mt-10 flex justify-center">
        <div className="flex max-w-full overflow-x-auto rounded-full border border-[#b6d0ff] bg-white p-1 shadow-sm dark:border-dark-border dark:bg-dark-card">
          {FILTERS.map(filter => (
            <button
              key={filter}
              type="button"
              onClick={() => setActiveFilter(filter)}
              className={'whitespace-nowrap rounded-full px-5 py-2 text-xs md:text-sm font-bold transition-all ' + (
                activeFilter === filter
                  ? 'bg-[#0087fc] text-white shadow-md'
                  : 'text-[#005e91] dark:text-dark-subtext hover:bg-blue-50 dark:hover:bg-white/10'
              )}
            >
              {filter}
            </button>
          ))}
        </div>
      </div>

      <div className="mt-6">
        {visibleCases.map((project, index) => {
          const reverse = index % 2 === 1;
          return (
            <article
              key={project.id}
              className="grid grid-cols-1 gap-10 lg:grid-cols-[0.82fr_1.45fr] lg:gap-12 items-center py-14 md:py-20 border-b border-[#0087fc]/10 last:border-0"
            >
              <div className={(reverse ? 'lg:order-2 lg:pl-10' : 'lg:order-1 lg:pr-10') + ' flex flex-col justify-center'}>
                <div className="flex items-center gap-5 mb-2">
                  <span className="text-[72px] md:text-[96px] font-black leading-none tracking-[-0.07em] text-[#0087fc]">{project.number}</span>
                  <span className="h-px flex-1 bg-[#0087fc]/70" />
                </div>
                <h2 className="text-3xl md:text-4xl font-black tracking-tight text-[#005e91] dark:text-white">{project.title}</h2>
                <p className="mt-1 text-base font-bold text-[#005e91] dark:text-brand-secondary">{project.subtitle}</p>
                <p className="mt-5 max-w-md text-[15px] leading-7 text-slate-600 dark:text-dark-subtext">{project.description}</p>
                <button type="button" onClick={() => setSelectedCase(project)} className="mt-6 inline-flex w-fit items-center gap-4 font-bold text-sm text-[#0087fc] group">
                  <span className="grid h-11 w-11 place-items-center rounded-full border border-[#0087fc] transition-all group-hover:bg-[#0087fc] group-hover:text-white"><Arrow /></span>
                  <span>Ver proyecto</span>
                </button>
              </div>

              <div className={reverse ? 'lg:order-1 relative' : 'lg:order-2 relative'}>
                <div className="relative">
                  <div className="overflow-hidden bg-slate-100 dark:bg-dark-card shadow-[0_24px_70px_rgba(0,94,145,0.12)] aspect-[16/10]">
                    <img src={project.thumbnailUrl} alt={project.title} className="h-full w-full object-cover transition-transform duration-700 hover:scale-[1.025]" loading={index === 0 ? 'eager' : 'lazy'} />
                  </div>
                  {project.secondaryImage && (
                    <div className="hidden md:block absolute -bottom-8 -left-8 w-[38%] aspect-square border-4 border-white dark:border-dark-bg shadow-xl overflow-hidden">
                      <img src={project.secondaryImage} alt={'Detalle audiovisual de ' + project.title} className="w-full h-full object-cover" />
                    </div>
                  )}
                  <p className={(reverse ? '-left-20' : '-right-20') + ' hidden xl:block absolute bottom-6 w-20 text-[11px] uppercase tracking-[0.18em] leading-4 text-[#0087fc] [writing-mode:vertical-rl]'}>
                    {project.note}
                  </p>
                </div>
              </div>
            </article>
          );
        })}
      </div>

      <footer className="pb-4 pt-10 text-center">
        <p className="text-sm text-slate-600 dark:text-dark-subtext">Soy estudiante de Publicidad y disfruto transformar ideas en trabajo real.</p>
        <a href="mailto:jamileth.guerra@up.ac.pa" className="mt-4 inline-flex items-center gap-3 rounded-full bg-[#0087fc] px-7 py-3 text-sm font-bold text-white shadow-lg transition-transform hover:-translate-y-0.5">
          Hablemos <Arrow />
        </a>
        <div className="mt-10 flex items-center justify-between text-[9px] uppercase tracking-[0.22em] text-[#0087fc]/80">
          <span className="flex items-center gap-3"><span className="h-px w-12 bg-[#0087fc]" />Gracias por estar aquí</span>
          <span>Crear · aprender · transformar · seguir</span>
        </div>
      </footer>

      {selectedCase && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <button type="button" aria-label="Cerrar proyecto" className="absolute inset-0 bg-white/80 dark:bg-black/80 backdrop-blur-md" onClick={() => setSelectedCase(null)} />
          <div className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-3xl bg-white dark:bg-black border border-[#b6d0ff] dark:border-white/20 shadow-2xl">
            <button type="button" onClick={() => setSelectedCase(null)} className="absolute right-4 top-4 z-10 grid h-10 w-10 place-items-center rounded-full bg-white/90 text-[#005e91] shadow">×</button>
            <img src={selectedCase.thumbnailUrl} alt={selectedCase.title} className="h-64 md:h-80 w-full object-cover" />
            <div className="p-7 md:p-10">
              <span className="text-xs font-black uppercase tracking-[0.2em] text-[#0087fc]">{selectedCase.category}</span>
              <h2 className="mt-3 text-4xl md:text-5xl font-black text-[#005e91] dark:text-white">{selectedCase.title}</h2>
              <p className="mt-3 text-lg font-bold text-[#005e91] dark:text-brand-secondary">{selectedCase.subtitle}</p>
              <p className="mt-6 max-w-2xl text-base leading-8 text-slate-600 dark:text-dark-subtext">{selectedCase.description}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PortfolioView;
