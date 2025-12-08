
import React, { useState } from 'react';
import { Project, ProjectCategory, ProjectSection, BriefData, FlowchartData } from '../types';

interface PortfolioViewProps {
  projects: Project[];
}

const CATEGORIES: (ProjectCategory | 'Todos')[] = ['Todos', 'Estrategia', 'Diseño', 'Website', 'Varios'];

const PortfolioView: React.FC<PortfolioViewProps> = ({ projects }) => {
  const [activeCategory, setActiveCategory] = useState<ProjectCategory | 'Todos'>('Todos');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filteredProjects = activeCategory === 'Todos'
    ? projects.filter(p => !p.isIdeaForge)
    : projects.filter(p => p.category === activeCategory && !p.isIdeaForge);

  const ideaForgeProjects = projects.filter(p => p.isIdeaForge);

  return (
    <div className="pt-24 md:pt-[110px] pb-12 px-4 md:px-6 max-w-[1200px] mx-auto min-h-screen">

      {/* Header */}
      <div className="text-center mb-12 animate-fade-in">
        <div className="inline-block border border-[#b6d0ff] dark:border-brand-primary/50 rounded-full px-6 py-1 mb-6">
          <span className="text-xs font-bold tracking-[0.2em] text-[#005e91] dark:text-brand-primary uppercase">
            Jamileth J. Guerra
          </span>
        </div>
        <h1 className="text-4xl md:text-6xl font-bold text-[#005e91] dark:text-white mb-6 leading-tight">
          Todas las ideas = <span className="text-[#0087fc] dark:text-brand-primary">Pensar, Crear & Transformar</span>
        </h1>
        <p className="text-slate-600 dark:text-dark-subtext max-w-2xl mx-auto text-lg">
          Explora las diferentes facetas de mi trabajo: Estrategia, Diseño, Websites o Activaciones.
        </p>
      </div>

      {/* Curriculum teaser banner */}
      <a
        href="/index-2.html"
        className="block mb-10 max-w-[960px] mx-auto bg-gradient-to-r from-[#0f4c75] via-[#3282b8] to-[#bbe1fa] dark:from-[#0b1b2b] dark:via-[#102a43] dark:to-[#1f4b99] text-white rounded-2xl shadow-neon border border-white/30 dark:border-white/10 p-4 sm:p-5 hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5"
      >
        <div className="flex items-center justify-between gap-4">
          <div className="flex-1">
            <p className="text-xs uppercase tracking-[0.3em] font-bold text-white/80">Currículum vital interactivo</p>
            <h3 className="text-lg sm:text-xl font-bold">Tócame, tócame: conoce más sobre Finlandia y mi trayectoria</h3>
            <p className="text-sm text-white/90">Explora la versión dinámica de mi CV en una página separada preparada para experimentos.</p>
          </div>
          <span className="text-sm font-semibold bg-white/15 rounded-full px-3 py-1">Abrir index-2</span>
        </div>
      </a>

      {/* Filter */}
      <div className="flex justify-center mb-12 animate-slide-up">
        <div className="bg-white dark:bg-dark-card border border-[#b6d0ff] dark:border-dark-border rounded-full p-1.5 flex flex-wrap justify-center gap-1 shadow-sm">
           {CATEGORIES.map((cat) => (
             <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-full text-sm font-semibold transition-all ${
                  activeCategory === cat
                    ? 'bg-[#0087fc] text-white shadow-md'
                    : 'text-[#005e91] dark:text-dark-subtext hover:bg-blue-50 dark:hover:bg-white/10'
                }`}
             >
                {cat === 'Todos' ? 'Todos los proyectos' : cat}
             </button>
           ))}
        </div>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
        {filteredProjects.map((project, idx) => (
          <div 
            key={project.id} 
            className="group cursor-pointer"
            onClick={() => setSelectedProject(project)}
            style={{ animationDelay: `${idx * 100}ms` }}
          >
            {/* Card Image */}
            <div className="bg-slate-100 dark:bg-dark-card rounded-2xl overflow-hidden aspect-[4/3] mb-4 relative shadow-sm border border-transparent dark:border-dark-border group-hover:shadow-xl transition-all duration-300">
               <img 
                 src={project.thumbnailUrl} 
                 alt={project.title} 
                 className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
               />
               <div className="absolute top-4 left-4">
                 <span className="bg-white/90 dark:bg-black/80 backdrop-blur-sm px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider text-[#005e91] dark:text-brand-primary border border-white/20">
                    {project.category}
                 </span>
               </div>
            </div>
            
            {/* Card Content */}
            <div className="animate-slide-up">
               <h3 className="text-2xl font-bold text-[#005e91] dark:text-white mb-2 group-hover:text-[#0087fc] transition-colors">{project.title}</h3>
               <p className="text-slate-600 dark:text-dark-subtext text-sm leading-relaxed mb-3 line-clamp-2">
                 {project.subtitle}
               </p>
               <div className="flex gap-2">
                 {project.tags.map((tag, tIdx) => (
                   <span key={tIdx} className="bg-blue-50 dark:bg-white/5 text-[#0076c7] dark:text-brand-secondary text-xs px-2 py-1 rounded font-medium">
                     {tag}
                   </span>
                 ))}
               </div>
            </div>
          </div>
        ))}
      </div>

      {/* Fraguas de Ideas Section */}
      <div className="border-t border-[#b6d0ff] dark:border-dark-border pt-16">
         <h2 className="text-3xl font-bold text-[#005e91] dark:text-white mb-8 text-center italic font-playfair">
           "Fraguas de ideas"
         </h2>
         <p className="text-center text-slate-500 dark:text-dark-subtext mb-10 max-w-2xl mx-auto">
            El depósito de análisis, investigaciones e hipótesis que alimentan futuras estrategias.
         </p>
         
         {ideaForgeProjects.length === 0 ? (
            <div className="text-center py-12 bg-slate-50 dark:bg-dark-card/30 rounded-2xl border border-dashed border-slate-300 dark:border-dark-border">
               <p className="text-slate-400 dark:text-dark-subtext">No hay documentos en la fragua aún.</p>
            </div>
         ) : (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
               {ideaForgeProjects.map(idea => (
                 <div key={idea.id} onClick={() => setSelectedProject(idea)} className="bg-white dark:bg-dark-card p-6 rounded-xl border border-slate-100 dark:border-dark-border shadow-sm hover:border-[#0087fc] cursor-pointer transition-all">
                    <div className="mb-4 text-[#0087fc]">
                      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" /></svg>
                    </div>
                    <h4 className="font-bold text-[#005e91] dark:text-white mb-2">{idea.title}</h4>
                    <p className="text-xs text-slate-500 dark:text-dark-subtext line-clamp-3">{idea.subtitle}</p>
                 </div>
               ))}
            </div>
         )}
      </div>

      {/* Project Detail Modal */}
      {selectedProject && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
           {/* Backdrop */}
           <div 
             className="absolute inset-0 bg-white/80 dark:bg-black/80 backdrop-blur-md transition-opacity"
             onClick={() => setSelectedProject(null)}
           />
           
           {/* Modal Content */}
           <div className="relative bg-white dark:bg-black border border-[#b6d0ff] dark:border-white/20 w-full max-w-4xl max-h-[90vh] rounded-3xl shadow-2xl overflow-y-auto animate-slide-up">
              
              {/* Close Button */}
              <button 
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 z-10 p-2 bg-white/50 dark:bg-black/50 rounded-full hover:bg-white dark:hover:bg-dark-card transition-colors"
              >
                <svg className="w-6 h-6 text-[#005e91] dark:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
              </button>

              {/* Cover Image */}
              <div className="h-64 md:h-80 w-full relative">
                 <img src={selectedProject.thumbnailUrl} alt={selectedProject.title} className="w-full h-full object-cover" />
                 <div className="absolute inset-0 bg-gradient-to-t from-white dark:from-black to-transparent" />
                 <div className="absolute bottom-6 left-6 md:left-10">
                    <span className="bg-[#0087fc] text-white text-xs font-bold px-3 py-1 rounded mb-3 inline-block">
                      {selectedProject.category}
                    </span>
                    <h2 className="text-3xl md:text-5xl font-bold text-[#005e91] dark:text-white leading-tight">
                      {selectedProject.title}
                    </h2>
                 </div>
              </div>

              {/* Body */}
              <div className="p-6 md:p-10 space-y-12">
                 
                 {/* Intro */}
                 <div>
                    <h3 className="text-sm font-bold text-[#0076c7] dark:text-brand-secondary uppercase tracking-widest mb-4">Resumen</h3>
                    <p className="text-lg md:text-xl text-slate-700 dark:text-slate-200 leading-relaxed font-playfair italic">
                       {selectedProject.subtitle}
                    </p>
                 </div>

                 {/* Sections */}
                 {selectedProject.sections.map((section) => (
                   <div key={section.id} className="border-t border-slate-100 dark:border-white/10 pt-8">
                      <h3 className="text-xl font-bold text-[#005e91] dark:text-brand-primary mb-6">{section.title}</h3>
                      
                      {/* Render based on type */}
                      {section.type === 'TEXT' && (
                        <div className="prose dark:prose-invert max-w-none text-slate-600 dark:text-slate-300">
                          <p>{section.content as string}</p>
                        </div>
                      )}

                      {section.type === 'BRIEF' && (
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                           {Object.entries(section.content as BriefData).map(([key, value]) => (
                             <div key={key} className="bg-slate-50 dark:bg-white/5 p-4 rounded-xl">
                               <h4 className="text-xs font-bold text-[#0076c7] dark:text-brand-secondary uppercase mb-2">
                                 {key.replace(/([A-Z])/g, ' $1').trim()}
                               </h4>
                               <p className="text-sm text-slate-700 dark:text-slate-300">{value}</p>
                             </div>
                           ))}
                        </div>
                      )}

                      {section.type === 'FLOWCHART' && (
                        <div className="bg-[#f0f7ff] dark:bg-brand-dark/20 border border-[#b6d0ff] dark:border-brand-primary/30 rounded-2xl p-6">
                           <div className="grid gap-6">
                              {(Object.entries(section.content as FlowchartData)).map(([key, value]) => (
                                <div key={key} className="flex flex-col md:flex-row md:items-start gap-2 md:gap-4">
                                   <div className="min-w-[150px] font-bold text-[#005e91] dark:text-brand-primary">
                                     {key.charAt(0).toUpperCase() + key.slice(1).replace(/([A-Z])/g, ' $1')}
                                   </div>
                                   <div className="flex-1 text-slate-700 dark:text-white bg-white dark:bg-black/40 p-3 rounded-lg border border-transparent dark:border-white/10">
                                      {value}
                                   </div>
                                </div>
                              ))}
                           </div>
                        </div>
                      )}

                      {section.type === 'IMAGE' && (
                         <img src={section.content as string} alt={section.title} className="w-full rounded-xl shadow-md" />
                      )}
                   </div>
                 ))}

                 {/* Tags Footer */}
                 <div className="pt-8 flex flex-wrap gap-2">
                    {selectedProject.tags.map(tag => (
                      <span key={tag} className="text-xs font-mono text-slate-400 dark:text-slate-500">#{tag}</span>
                    ))}
                 </div>
              </div>
           </div>
        </div>
      )}

    </div>
  );
};

export default PortfolioView;
